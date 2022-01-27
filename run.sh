node trend.js > out.json
node trendlist.js > trends.txt
while read p; do
  node search.js "$p" > "$p".json
done <trends.txt
while read p; do
  node parse.js "$p" > "$p".csv
done <trends.txt