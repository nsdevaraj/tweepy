while read p; do
  node search.js "$p" > "$p".json
done <trends.txt