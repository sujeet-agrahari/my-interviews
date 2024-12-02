1. Narrow down the question scope
Clarification:
- 1B users * 150 countries
- 1B videos viewed per day
- 10B videos uploaded per year
- 10s videos on average, 1080*1920 resolution -> 1 MB per video
-  10B videos uploaded per year * 1MB raw video=  10 PB per year ( devices * replication) * 10 = 100PB per year: Blob storage
-  Metadata: 10TB of video metadata per year: NoSQL(probably not need to super complex calculations across the video to relate to each other, what's why we don't need SQL)
-  Traffic: 10B/ year/ 365 -> 30M per day / 100000 = 300 videos / second ~ 1000 per second at peak * 1MB = 10GB/s traffic in ingress
-  1 B / videos / day/ 100000 seconds = 1000000 / 100000 per second ~ 10 GBps egress

Success Metric: time in app(maximize the time in app, average 1 per hour a day)

1. Don't be afraid to make suggestions about which part of the system to focus on
2. Make sure the interviewer agrees with your approach
3. Make some calculation to make sure the scale is feasible
4. Calculate the storage and traffic
5. Map out the high-level architecture components
6. Two services: upload service, content delivery service
7. Map out the flow of data between the components: Video Blog Storage(AWS S3)S3 Cross-Region Replication (CRR),  -> Data replicas, Regional Caches, CDN(AWS CloudFront), data archiving because most videos are not accessed after a few days
8. Video Metadata Storage: DynamoDB -> 



