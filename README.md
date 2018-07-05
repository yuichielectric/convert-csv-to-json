convert-csv-to-json
=====

This project is my solution for the 1st assignment at edX Introduction to Node.js course.

https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2018/course/

convert.js fetches a CSV file from [here](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+2T2018+type@asset+block/customer-data.csv) and converts that CSV file to JSON and saves it to current directory.

```
$ node convert.js
```

### 1. Why did I design this project the way I did?

I used csvtojson module. This greatly help and reduce the code I needed to write.

### 2. How did I test?

I downloaded the solution file from [here](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/49802b4bc23bb76c0a1eb9bff4178d55/asset-v1:Microsoft+DEV283x+2T2018+type@asset+block/customer-data-solution.json), and diffed.

### 3. Known issues

 * The solution JSON file's new line code is CRLF. When you run convert.js on non-Windows OS, the output json file's new line code will be LF and diff command will output 0% match.
