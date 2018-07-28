# FinishLine
Generator.js contains the generator i've created

index.js contains the example/template code for a site

_abck is the most important cookie for akamai bot manager sites

when you first get a page with akamai bot manager the response contains an _abck cookie containing '~1~'

you need to send a post request to {site.com}/_bm/_data

with "sensor_data": {sensor_data_generated} in the body and if successful, the response will containing

set-cookie {abck=xxx~0~xxx} '~0~' meaning you're validated successfully.

Be aware of false positives, akamai returns 'success:true' on {site.com}/_bm/_data even if you weren't successful.