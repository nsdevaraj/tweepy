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

#woeid for cities
woeid_dict = {'London': 44418, 'Tokyo': 1118370, 'New York': 2459115, 'Istanbul':2344116, 'Paris': 615702, 'Los Angeles':2442047,  'Moscow': 2122265,  'Sao Paulo': 455827,'Amsterdam':727232, 'Seoul':1132599, 'Rome':721943,'Sydney':1105779,'San Francisco':2487956,'Barcelona':753692,'Melbourne':1103816,'Madrid':766273,'Mumbai':2295411,'Osaka':15015370,'Tel aviv':1968212,'Boston':2367105,'Zurich':784794,'Munich':676757,'Manila':1199477,'Kualalumbur':1154781,'Riyadh':1939753,'Mexico':116545,'Bangkok':1225448,'Toronto':4118,'Berlin':638242,'Buenos Aires':468739,'Montreal':3534,'Dubai':1940345,'Rio':455825,'St. Petersburg':2123260,'Miami':2450022,'Vienna':551801}

# printing the information
for key, value in woeid_dict.items():
    #trend limit is 5
    NUM_TOPICS=0
    trends = api.get_place_trends(value)
    print("The top trends for the location are :", key) 
    for value in trends: 
        for trend in value['trends']: 
            print(key ,' -> ', trend['name'])
            NUM_TOPICS=NUM_TOPICS+1
            if NUM_TOPICS==5:
                break
