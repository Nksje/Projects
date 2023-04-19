import requests
import datetime
from config import bot_token, open_weather_token

from aiogram import Bot, types
from aiogram.dispatcher import Dispatcher
from aiogram.utils import executor

bot = Bot(token=bot_token)
dp = Dispatcher(bot)


@dp.message_handler(commands=["start"])
async def start_command(message: types.Message):
    await message.reply('Привет! Напиши мне навзание города и я пришлю тебе сводку погоды!')


@dp.message_handler()
async def get_data(message: types.Message):
    code_to_smile = {
        "Clear": "Ясно \U00002600",
        "Clouds": "Облачно \U00002601",
        "Rain": "Дождь \U00002614",
        "Drizzel": "Дождь \U00002614",
        "Thunderstorm": "Гроза \U000026A1",
        "Snow": "Снег \U0001F328",
        "Mist": "Туман \U0001F32B"
    }

    try:
        r = requests.get(
            f"https://api.openweathermap.org/data/2.5/weather?q={message.text}&appid={open_weather_token}&units=metric"
        )
        data = r.json()

        city = data['name']
        cur_weather = data['main']['temp']

        weather_discription = data['weather'][0]['main']
        if weather_discription in code_to_smile:
            wd = code_to_smile[weather_discription]
        else:
            await message.reply('Посмотри в окно, не пойму что там за погода!')

        humidity = data['main']['humidity']
        pressure = data['main']['pressure']
        wind = data['wind']['speed']
        sunrise_timestamp = datetime.datetime.fromtimestamp(
            data['sys']['sunrise'])
        sunset_timestamp = datetime.datetime.fromtimestamp(
            data['sys']['sunset'])
        lengh_of_the_day = sunset_timestamp - sunrise_timestamp

        await message.reply(
            f'***{datetime.datetime.now().strftime("%Y-%m-%d %H:%M")}***\n'
            f'Погода в городе: {city}\nТемпература: {cur_weather} С° {wd}\nВлажность: {humidity}%\n'
            f'Давление: {pressure} мм.рт.ст\nСкорость ветра: {wind} м/с\nВосход солнца: {sunrise_timestamp}\n'
            f'Закат солнца: {sunset_timestamp}\nПродолжительность дня: {lengh_of_the_day}\n'
            f'Хорошего дня!')
    except:
        await message.reply("\U00002620 Проверьте название города! \U00002620")


if __name__ == '__main__':
    executor.start_polling(dp)
