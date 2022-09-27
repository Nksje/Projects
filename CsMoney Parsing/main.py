from fake_useragent import UserAgent
import requests
import json

ua = UserAgent()
# print(ua.random)

def collect_data():
    # response = requests.get(
    #     url='https://inventories.cs.money/5.0/load_bots_inventory/730?buyBonus=35&isStore=true&limit=60&maxPrice=10000&minPrice=1&offset=0&sort=botFirst&withStack=true',
    #     headers={'user-agent': f'{ua.random}'}
    # )

    # with open('result.json', 'w', encoding='utf8') as file:
    #     json.dump(response.json(), file, indent=4, ensure_ascii=False)
    offset = 0
    batch_size = 60
    result = []
    cnt = 0
    
    while True:
        for item in range(offset, offset + batch_size, 60):
            # url = item
            # print(url)
            
            url = f'https://inventories.cs.money/5.0/load_bots_inventory/730?buyBonus=35&isStore=true&limit=60&maxPrice=10000&minPrice=2000&offset={item}&sort=botFirst&type=2&withStack=true'
            response = requests.get(
                url=url,
                headers={'user-agent': f'{ua.random}'}
            )
            
            offset += batch_size

            data = response.json()
            items = data.get('items')

            for i in items:
                if i.get('overprice') is not None and i.get('overprice') < -10:
                    item_full_name = i.get('fullName')
                    item_3d = i.get('3d')
                    item_price = i.get('price')
                    item_over_price = i.get('overprice')

                    result.append(
                        {
                            'full_name': item_full_name,
                            '3d': item_3d,
                            'price': item_price,
                            'overprice': item_over_price
                        }
                    )

        cnt += 1
        print(f'Page #{cnt}')
        print(url)
        
        if len(items) < 60:
            break
        
    with open('result.json', 'w', encoding='utf8') as file:
        json.dump(result, file, indent=4, ensure_ascii=False)

    print(len(result))
    
def main():
    collect_data()
    


    
if __name__ == '__main__':
    main()