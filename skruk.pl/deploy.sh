(middleman build && cd build && s3cmd -c ~/.s3cfg-skruk sync . s3://skruk.pl/)
