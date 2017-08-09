import json

with open('../data/poloniex-BTCETH-5min-candles.json') as json_data:
    d = json.load(json_data)
    for t in d:
        print(t)
