import tweepy
consumer_key = 'lzodokf42dV4mx8ax1PgIEerV'
consumer_secret = 'lYybd1BzQRT2OWHeIQH1SsFVndaw6LsFwbyfI2ImnjHVFsi8VD'

access_token =  '153542869-m4NCB30Z4gxRrI5UCisRpdtyqbzLXrLJCFDa3ZQr'
access_secret = 'xuwS38e0oBEgfM1LH7gOE27eVbKXG4gH83egJiZ5icAfw'


auth = tweepy.OAuthHandler(consumer_key, consumer_secret)

auth.set_access_token(access_token, access_secret)

api = tweepy.API(auth)

# Using the API object to get tweets from my timeine.

public_tweets = api.home_timeline()

for tweet in public_tweets:
    print(tweet.text)

