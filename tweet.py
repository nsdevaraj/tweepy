# import the module
import tweepy
  
# assign the values accordingly
consumer_key = "dyvAyWjsmf0kQmLwaJEAjg"
consumer_secret = "6I3jqhiaHrrZFFtkCoBfQwcBjtCoo5JU8mkt5VLJI"
access_token = "8156612-QbJeI3zmQxscoLal3SaPD3BzlAl9TpaSOaEmiDeMAA"
access_token_secret = "Rw6W99v5PZ8dS8ASVj2W0MGFPBh4u7ibMeBmUE0QvWhhX"
  
# authorization of consumer key and consumer secret
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
  
# set access to user's access key and access secret 
auth.set_access_token(access_token, access_token_secret)
  
# calling the api 
api = tweepy.API(auth)
  
# WOEID of London
woeid = 44418
  
# fetching the trends
trends = api.trends_place(woeid)
  
# printing the information
print("The top trends for the location are :")
  
for value in trends:
    for trend in value['trends']:
        print(trend['name'])
