node trend.js > out.json
node trendlist.js > trends.txt
i=0
while read p; do
  ((i=i+1))
  node search.js "$p" > "$i".json
done <trends.txt
echo 'trend,created,retweets,likes,replies,quotes,url,twitterId,username,followers,profileImage,media,tweet'> out.csv
i=0
while read p; do
  ((i=i+1))
  node parse.js "$i" "$p" >> out.csv
done <trends.txt