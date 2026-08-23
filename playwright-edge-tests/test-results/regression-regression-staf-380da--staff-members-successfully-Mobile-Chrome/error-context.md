# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\regression-staff.spec.js >> @regression Staff Management >> should create and update staff members successfully
- Location: tests\regression\regression-staff.spec.js:10:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /staff/i })

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - banner [ref=f1e3]:
      - generic [ref=f1e4]:
        - generic [ref=f1e5] [cursor=pointer]:
          - generic [ref=f1e6]: "Y"
          - generic [ref=f1e7]:
            - generic [ref=f1e8]:
              - generic [ref=f1e9]: Yarivo
              - generic [ref=f1e10]: Global
            - generic [ref=f1e11]: Appointments
        - navigation [ref=f1e12]:
          - button "Public Booking" [ref=f1e13]
          - button "Business Login" [ref=f1e14]
          - button "Register Business" [ref=f1e15]
    - main [ref=f1e16]:
      - generic [ref=f1e17]:
        - generic [ref=f1e18]:
          - heading "Book an Appointment" [level=1] [ref=f1e19]
          - paragraph [ref=f1e20]: Select a business, choose your service, pick a date, and reserve your slot instantly.
        - generic [ref=f1e21]:
          - heading "1. Select Business" [level=2] [ref=f1e22]
          - generic [ref=f1e23]:
            - 'button "Agenda Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips: UTC USD" [ref=f1e24]':
              - generic [ref=f1e25]: Agenda
              - paragraph [ref=f1e26]: "Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips:"
              - generic [ref=f1e27]:
                - generic [ref=f1e28]: UTC
                - generic [ref=f1e29]: USD
            - button "Apex Salon & Spa UTC USD" [ref=f1e30]:
              - generic [ref=f1e31]: Apex Salon & Spa
              - generic [ref=f1e32]:
                - generic [ref=f1e33]: UTC
                - generic [ref=f1e34]: USD
            - button "Azad Asia/Calcutta USD" [ref=f1e35]:
              - generic [ref=f1e36]: Azad
              - generic [ref=f1e37]:
                - generic [ref=f1e38]: Asia/Calcutta
                - generic [ref=f1e39]: USD
            - button "Crown Salon UTC USD" [ref=f1e40]:
              - generic [ref=f1e41]: Crown Salon
              - generic [ref=f1e42]:
                - generic [ref=f1e43]: UTC
                - generic [ref=f1e44]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e45]:
              - generic [ref=f1e46]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e47]:
                - generic [ref=f1e48]: UTC
                - generic [ref=f1e49]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e50]:
              - generic [ref=f1e51]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e52]:
                - generic [ref=f1e53]: UTC
                - generic [ref=f1e54]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e55]:
              - generic [ref=f1e56]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e57]:
                - generic [ref=f1e58]: UTC
                - generic [ref=f1e59]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e60]:
              - generic [ref=f1e61]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e62]:
                - generic [ref=f1e63]: UTC
                - generic [ref=f1e64]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e65]:
              - generic [ref=f1e66]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e67]:
                - generic [ref=f1e68]: UTC
                - generic [ref=f1e69]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e70]:
              - generic [ref=f1e71]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e72]:
                - generic [ref=f1e73]: UTC
                - generic [ref=f1e74]: USD
            - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD" [ref=f1e75]:
              - generic [ref=f1e76]: Test Salon 0amdq1
              - paragraph [ref=f1e77]: Auto-generated test business description 0amdq1
              - generic [ref=f1e78]:
                - generic [ref=f1e79]: UTC
                - generic [ref=f1e80]: USD
            - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD" [ref=f1e81]:
              - generic [ref=f1e82]: Test Salon 0bcq40
              - paragraph [ref=f1e83]: Auto-generated test business description 0bcq40
              - generic [ref=f1e84]:
                - generic [ref=f1e85]: UTC
                - generic [ref=f1e86]: USD
            - button "Test Salon 0bg9rw Auto-generated test business description 0bg9rw UTC USD" [ref=f1e87]:
              - generic [ref=f1e88]: Test Salon 0bg9rw
              - paragraph [ref=f1e89]: Auto-generated test business description 0bg9rw
              - generic [ref=f1e90]:
                - generic [ref=f1e91]: UTC
                - generic [ref=f1e92]: USD
            - button "Test Salon 0dcs33 Auto-generated test business description 0dcs33 UTC USD" [ref=f1e93]:
              - generic [ref=f1e94]: Test Salon 0dcs33
              - paragraph [ref=f1e95]: Auto-generated test business description 0dcs33
              - generic [ref=f1e96]:
                - generic [ref=f1e97]: UTC
                - generic [ref=f1e98]: USD
            - button "Test Salon 0kklgx Auto-generated test business description 0kklgx UTC USD" [ref=f1e99]:
              - generic [ref=f1e100]: Test Salon 0kklgx
              - paragraph [ref=f1e101]: Auto-generated test business description 0kklgx
              - generic [ref=f1e102]:
                - generic [ref=f1e103]: UTC
                - generic [ref=f1e104]: USD
            - button "Test Salon 0rleyb Auto-generated test business description 0rleyb UTC USD" [ref=f1e105]:
              - generic [ref=f1e106]: Test Salon 0rleyb
              - paragraph [ref=f1e107]: Auto-generated test business description 0rleyb
              - generic [ref=f1e108]:
                - generic [ref=f1e109]: UTC
                - generic [ref=f1e110]: USD
            - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD" [ref=f1e111]:
              - generic [ref=f1e112]: Test Salon 1bip1q
              - paragraph [ref=f1e113]: Auto-generated test business description 1bip1q
              - generic [ref=f1e114]:
                - generic [ref=f1e115]: UTC
                - generic [ref=f1e116]: USD
            - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD" [ref=f1e117]:
              - generic [ref=f1e118]: Test Salon 1gtheb
              - paragraph [ref=f1e119]: Auto-generated test business description 1gtheb
              - generic [ref=f1e120]:
                - generic [ref=f1e121]: UTC
                - generic [ref=f1e122]: USD
            - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD" [ref=f1e123]:
              - generic [ref=f1e124]: Test Salon 1hiobw
              - paragraph [ref=f1e125]: Auto-generated test business description 1hiobw
              - generic [ref=f1e126]:
                - generic [ref=f1e127]: UTC
                - generic [ref=f1e128]: USD
            - button "Test Salon 1tz8tl Auto-generated test business description 1tz8tl UTC USD" [ref=f1e129]:
              - generic [ref=f1e130]: Test Salon 1tz8tl
              - paragraph [ref=f1e131]: Auto-generated test business description 1tz8tl
              - generic [ref=f1e132]:
                - generic [ref=f1e133]: UTC
                - generic [ref=f1e134]: USD
            - button "Test Salon 2ondoq Auto-generated test business description 2ondoq UTC USD" [ref=f1e135]:
              - generic [ref=f1e136]: Test Salon 2ondoq
              - paragraph [ref=f1e137]: Auto-generated test business description 2ondoq
              - generic [ref=f1e138]:
                - generic [ref=f1e139]: UTC
                - generic [ref=f1e140]: USD
            - button "Test Salon 2vlcr5 Auto-generated test business description 2vlcr5 UTC USD" [ref=f1e141]:
              - generic [ref=f1e142]: Test Salon 2vlcr5
              - paragraph [ref=f1e143]: Auto-generated test business description 2vlcr5
              - generic [ref=f1e144]:
                - generic [ref=f1e145]: UTC
                - generic [ref=f1e146]: USD
            - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD" [ref=f1e147]:
              - generic [ref=f1e148]: Test Salon 35kobd
              - paragraph [ref=f1e149]: Auto-generated test business description 35kobd
              - generic [ref=f1e150]:
                - generic [ref=f1e151]: UTC
                - generic [ref=f1e152]: USD
            - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD" [ref=f1e153]:
              - generic [ref=f1e154]: Test Salon 3kcg5c
              - paragraph [ref=f1e155]: Auto-generated test business description 3kcg5c
              - generic [ref=f1e156]:
                - generic [ref=f1e157]: UTC
                - generic [ref=f1e158]: USD
            - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD" [ref=f1e159]:
              - generic [ref=f1e160]: Test Salon 4odkr7
              - paragraph [ref=f1e161]: Auto-generated test business description 4odkr7
              - generic [ref=f1e162]:
                - generic [ref=f1e163]: UTC
                - generic [ref=f1e164]: USD
            - button "Test Salon 4xohph Auto-generated test business description 4xohph UTC USD" [ref=f1e165]:
              - generic [ref=f1e166]: Test Salon 4xohph
              - paragraph [ref=f1e167]: Auto-generated test business description 4xohph
              - generic [ref=f1e168]:
                - generic [ref=f1e169]: UTC
                - generic [ref=f1e170]: USD
            - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD" [ref=f1e171]:
              - generic [ref=f1e172]: Test Salon 5kpeld
              - paragraph [ref=f1e173]: Auto-generated test business description 5kpeld
              - generic [ref=f1e174]:
                - generic [ref=f1e175]: UTC
                - generic [ref=f1e176]: USD
            - button "Test Salon 68wan7 Auto-generated test business description 68wan7 UTC USD" [ref=f1e177]:
              - generic [ref=f1e178]: Test Salon 68wan7
              - paragraph [ref=f1e179]: Auto-generated test business description 68wan7
              - generic [ref=f1e180]:
                - generic [ref=f1e181]: UTC
                - generic [ref=f1e182]: USD
            - button "Test Salon 6ev8gh Auto-generated test business description 6ev8gh UTC USD" [ref=f1e183]:
              - generic [ref=f1e184]: Test Salon 6ev8gh
              - paragraph [ref=f1e185]: Auto-generated test business description 6ev8gh
              - generic [ref=f1e186]:
                - generic [ref=f1e187]: UTC
                - generic [ref=f1e188]: USD
            - button "Test Salon 6us1xu Auto-generated test business description 6us1xu UTC USD" [ref=f1e189]:
              - generic [ref=f1e190]: Test Salon 6us1xu
              - paragraph [ref=f1e191]: Auto-generated test business description 6us1xu
              - generic [ref=f1e192]:
                - generic [ref=f1e193]: UTC
                - generic [ref=f1e194]: USD
            - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD" [ref=f1e195]:
              - generic [ref=f1e196]: Test Salon 6xqwra
              - paragraph [ref=f1e197]: Auto-generated test business description 6xqwra
              - generic [ref=f1e198]:
                - generic [ref=f1e199]: UTC
                - generic [ref=f1e200]: USD
            - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD" [ref=f1e201]:
              - generic [ref=f1e202]: Test Salon 76cxtv
              - paragraph [ref=f1e203]: Auto-generated test business description 76cxtv
              - generic [ref=f1e204]:
                - generic [ref=f1e205]: UTC
                - generic [ref=f1e206]: USD
            - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD" [ref=f1e207]:
              - generic [ref=f1e208]: Test Salon 7bit9w
              - paragraph [ref=f1e209]: Auto-generated test business description 7bit9w
              - generic [ref=f1e210]:
                - generic [ref=f1e211]: UTC
                - generic [ref=f1e212]: USD
            - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD" [ref=f1e213]:
              - generic [ref=f1e214]: Test Salon 7nf9hv
              - paragraph [ref=f1e215]: Auto-generated test business description 7nf9hv
              - generic [ref=f1e216]:
                - generic [ref=f1e217]: UTC
                - generic [ref=f1e218]: USD
            - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD" [ref=f1e219]:
              - generic [ref=f1e220]: Test Salon 7o4pn7
              - paragraph [ref=f1e221]: Auto-generated test business description 7o4pn7
              - generic [ref=f1e222]:
                - generic [ref=f1e223]: UTC
                - generic [ref=f1e224]: USD
            - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD" [ref=f1e225]:
              - generic [ref=f1e226]: Test Salon 8h9i5t
              - paragraph [ref=f1e227]: Auto-generated test business description 8h9i5t
              - generic [ref=f1e228]:
                - generic [ref=f1e229]: UTC
                - generic [ref=f1e230]: USD
            - button "Test Salon 9y7j6v Auto-generated test business description 9y7j6v UTC USD" [ref=f1e231]:
              - generic [ref=f1e232]: Test Salon 9y7j6v
              - paragraph [ref=f1e233]: Auto-generated test business description 9y7j6v
              - generic [ref=f1e234]:
                - generic [ref=f1e235]: UTC
                - generic [ref=f1e236]: USD
            - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD" [ref=f1e237]:
              - generic [ref=f1e238]: Test Salon a68qlk
              - paragraph [ref=f1e239]: Auto-generated test business description a68qlk
              - generic [ref=f1e240]:
                - generic [ref=f1e241]: UTC
                - generic [ref=f1e242]: USD
            - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD" [ref=f1e243]:
              - generic [ref=f1e244]: Test Salon asymmy
              - paragraph [ref=f1e245]: Auto-generated test business description asymmy
              - generic [ref=f1e246]:
                - generic [ref=f1e247]: UTC
                - generic [ref=f1e248]: USD
            - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD" [ref=f1e249]:
              - generic [ref=f1e250]: Test Salon atz1m3
              - paragraph [ref=f1e251]: Auto-generated test business description atz1m3
              - generic [ref=f1e252]:
                - generic [ref=f1e253]: UTC
                - generic [ref=f1e254]: USD
            - button "Test Salon b2od8p Auto-generated test business description b2od8p UTC USD" [ref=f1e255]:
              - generic [ref=f1e256]: Test Salon b2od8p
              - paragraph [ref=f1e257]: Auto-generated test business description b2od8p
              - generic [ref=f1e258]:
                - generic [ref=f1e259]: UTC
                - generic [ref=f1e260]: USD
            - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD" [ref=f1e261]:
              - generic [ref=f1e262]: Test Salon b76urd
              - paragraph [ref=f1e263]: Auto-generated test business description b76urd
              - generic [ref=f1e264]:
                - generic [ref=f1e265]: UTC
                - generic [ref=f1e266]: USD
            - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD" [ref=f1e267]:
              - generic [ref=f1e268]: Test Salon btnwca
              - paragraph [ref=f1e269]: Auto-generated test business description btnwca
              - generic [ref=f1e270]:
                - generic [ref=f1e271]: UTC
                - generic [ref=f1e272]: USD
            - button "Test Salon buvlm6 Auto-generated test business description buvlm6 UTC USD" [ref=f1e273]:
              - generic [ref=f1e274]: Test Salon buvlm6
              - paragraph [ref=f1e275]: Auto-generated test business description buvlm6
              - generic [ref=f1e276]:
                - generic [ref=f1e277]: UTC
                - generic [ref=f1e278]: USD
            - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD" [ref=f1e279]:
              - generic [ref=f1e280]: Test Salon c0uqdl
              - paragraph [ref=f1e281]: Auto-generated test business description c0uqdl
              - generic [ref=f1e282]:
                - generic [ref=f1e283]: UTC
                - generic [ref=f1e284]: USD
            - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD" [ref=f1e285]:
              - generic [ref=f1e286]: Test Salon cemiq4
              - paragraph [ref=f1e287]: Auto-generated test business description cemiq4
              - generic [ref=f1e288]:
                - generic [ref=f1e289]: UTC
                - generic [ref=f1e290]: USD
            - button "Test Salon cktfm5 Auto-generated test business description cktfm5 UTC USD" [ref=f1e291]:
              - generic [ref=f1e292]: Test Salon cktfm5
              - paragraph [ref=f1e293]: Auto-generated test business description cktfm5
              - generic [ref=f1e294]:
                - generic [ref=f1e295]: UTC
                - generic [ref=f1e296]: USD
            - button "Test Salon cr33gn Auto-generated test business description cr33gn UTC USD" [ref=f1e297]:
              - generic [ref=f1e298]: Test Salon cr33gn
              - paragraph [ref=f1e299]: Auto-generated test business description cr33gn
              - generic [ref=f1e300]:
                - generic [ref=f1e301]: UTC
                - generic [ref=f1e302]: USD
            - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD" [ref=f1e303]:
              - generic [ref=f1e304]: Test Salon cs0sk6
              - paragraph [ref=f1e305]: Auto-generated test business description cs0sk6
              - generic [ref=f1e306]:
                - generic [ref=f1e307]: UTC
                - generic [ref=f1e308]: USD
            - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD" [ref=f1e309]:
              - generic [ref=f1e310]: Test Salon d2s8sx
              - paragraph [ref=f1e311]: Auto-generated test business description d2s8sx
              - generic [ref=f1e312]:
                - generic [ref=f1e313]: UTC
                - generic [ref=f1e314]: USD
            - button "Test Salon e2cvo6 Auto-generated test business description e2cvo6 UTC USD" [ref=f1e315]:
              - generic [ref=f1e316]: Test Salon e2cvo6
              - paragraph [ref=f1e317]: Auto-generated test business description e2cvo6
              - generic [ref=f1e318]:
                - generic [ref=f1e319]: UTC
                - generic [ref=f1e320]: USD
            - button "Test Salon e6ccjp Auto-generated test business description e6ccjp UTC USD" [ref=f1e321]:
              - generic [ref=f1e322]: Test Salon e6ccjp
              - paragraph [ref=f1e323]: Auto-generated test business description e6ccjp
              - generic [ref=f1e324]:
                - generic [ref=f1e325]: UTC
                - generic [ref=f1e326]: USD
            - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD" [ref=f1e327]:
              - generic [ref=f1e328]: Test Salon egni33
              - paragraph [ref=f1e329]: Auto-generated test business description egni33
              - generic [ref=f1e330]:
                - generic [ref=f1e331]: UTC
                - generic [ref=f1e332]: USD
            - button "Test Salon eog81f Auto-generated test business description eog81f UTC USD" [ref=f1e333]:
              - generic [ref=f1e334]: Test Salon eog81f
              - paragraph [ref=f1e335]: Auto-generated test business description eog81f
              - generic [ref=f1e336]:
                - generic [ref=f1e337]: UTC
                - generic [ref=f1e338]: USD
            - button "Test Salon esyzer Auto-generated test business description esyzer UTC USD" [ref=f1e339]:
              - generic [ref=f1e340]: Test Salon esyzer
              - paragraph [ref=f1e341]: Auto-generated test business description esyzer
              - generic [ref=f1e342]:
                - generic [ref=f1e343]: UTC
                - generic [ref=f1e344]: USD
            - button "Test Salon f39zeb Auto-generated test business description f39zeb UTC USD" [ref=f1e345]:
              - generic [ref=f1e346]: Test Salon f39zeb
              - paragraph [ref=f1e347]: Auto-generated test business description f39zeb
              - generic [ref=f1e348]:
                - generic [ref=f1e349]: UTC
                - generic [ref=f1e350]: USD
            - button "Test Salon f66hvn Auto-generated test business description f66hvn UTC USD" [ref=f1e351]:
              - generic [ref=f1e352]: Test Salon f66hvn
              - paragraph [ref=f1e353]: Auto-generated test business description f66hvn
              - generic [ref=f1e354]:
                - generic [ref=f1e355]: UTC
                - generic [ref=f1e356]: USD
            - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD" [ref=f1e357]:
              - generic [ref=f1e358]: Test Salon fnk1tt
              - paragraph [ref=f1e359]: Auto-generated test business description fnk1tt
              - generic [ref=f1e360]:
                - generic [ref=f1e361]: UTC
                - generic [ref=f1e362]: USD
            - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD" [ref=f1e363]:
              - generic [ref=f1e364]: Test Salon fwgmjd
              - paragraph [ref=f1e365]: Auto-generated test business description fwgmjd
              - generic [ref=f1e366]:
                - generic [ref=f1e367]: UTC
                - generic [ref=f1e368]: USD
            - button "Test Salon g4v7yp Auto-generated test business description g4v7yp UTC USD" [ref=f1e369]:
              - generic [ref=f1e370]: Test Salon g4v7yp
              - paragraph [ref=f1e371]: Auto-generated test business description g4v7yp
              - generic [ref=f1e372]:
                - generic [ref=f1e373]: UTC
                - generic [ref=f1e374]: USD
            - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD" [ref=f1e375]:
              - generic [ref=f1e376]: Test Salon gi47ns
              - paragraph [ref=f1e377]: Auto-generated test business description gi47ns
              - generic [ref=f1e378]:
                - generic [ref=f1e379]: UTC
                - generic [ref=f1e380]: USD
            - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD" [ref=f1e381]:
              - generic [ref=f1e382]: Test Salon gl6fqe
              - paragraph [ref=f1e383]: Auto-generated test business description gl6fqe
              - generic [ref=f1e384]:
                - generic [ref=f1e385]: UTC
                - generic [ref=f1e386]: USD
            - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD" [ref=f1e387]:
              - generic [ref=f1e388]: Test Salon gl7ea7
              - paragraph [ref=f1e389]: Auto-generated test business description gl7ea7
              - generic [ref=f1e390]:
                - generic [ref=f1e391]: UTC
                - generic [ref=f1e392]: USD
            - button "Test Salon hsr5y2 Auto-generated test business description hsr5y2 UTC USD" [ref=f1e393]:
              - generic [ref=f1e394]: Test Salon hsr5y2
              - paragraph [ref=f1e395]: Auto-generated test business description hsr5y2
              - generic [ref=f1e396]:
                - generic [ref=f1e397]: UTC
                - generic [ref=f1e398]: USD
            - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD" [ref=f1e399]:
              - generic [ref=f1e400]: Test Salon hxzb30
              - paragraph [ref=f1e401]: Auto-generated test business description hxzb30
              - generic [ref=f1e402]:
                - generic [ref=f1e403]: UTC
                - generic [ref=f1e404]: USD
            - button "Test Salon hywbat Auto-generated test business description hywbat UTC USD" [ref=f1e405]:
              - generic [ref=f1e406]: Test Salon hywbat
              - paragraph [ref=f1e407]: Auto-generated test business description hywbat
              - generic [ref=f1e408]:
                - generic [ref=f1e409]: UTC
                - generic [ref=f1e410]: USD
            - button "Test Salon i2ygf8 Auto-generated test business description i2ygf8 UTC USD" [ref=f1e411]:
              - generic [ref=f1e412]: Test Salon i2ygf8
              - paragraph [ref=f1e413]: Auto-generated test business description i2ygf8
              - generic [ref=f1e414]:
                - generic [ref=f1e415]: UTC
                - generic [ref=f1e416]: USD
            - button "Test Salon igp24q Auto-generated test business description igp24q UTC USD" [ref=f1e417]:
              - generic [ref=f1e418]: Test Salon igp24q
              - paragraph [ref=f1e419]: Auto-generated test business description igp24q
              - generic [ref=f1e420]:
                - generic [ref=f1e421]: UTC
                - generic [ref=f1e422]: USD
            - button "Test Salon io5wbl Auto-generated test business description io5wbl UTC USD" [ref=f1e423]:
              - generic [ref=f1e424]: Test Salon io5wbl
              - paragraph [ref=f1e425]: Auto-generated test business description io5wbl
              - generic [ref=f1e426]:
                - generic [ref=f1e427]: UTC
                - generic [ref=f1e428]: USD
            - button "Test Salon iq4yfy Auto-generated test business description iq4yfy UTC USD" [ref=f1e429]:
              - generic [ref=f1e430]: Test Salon iq4yfy
              - paragraph [ref=f1e431]: Auto-generated test business description iq4yfy
              - generic [ref=f1e432]:
                - generic [ref=f1e433]: UTC
                - generic [ref=f1e434]: USD
            - button "Test Salon j9kwz5 Auto-generated test business description j9kwz5 UTC USD" [ref=f1e435]:
              - generic [ref=f1e436]: Test Salon j9kwz5
              - paragraph [ref=f1e437]: Auto-generated test business description j9kwz5
              - generic [ref=f1e438]:
                - generic [ref=f1e439]: UTC
                - generic [ref=f1e440]: USD
            - button "Test Salon jyc5f4 Auto-generated test business description jyc5f4 UTC USD" [ref=f1e441]:
              - generic [ref=f1e442]: Test Salon jyc5f4
              - paragraph [ref=f1e443]: Auto-generated test business description jyc5f4
              - generic [ref=f1e444]:
                - generic [ref=f1e445]: UTC
                - generic [ref=f1e446]: USD
            - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD" [ref=f1e447]:
              - generic [ref=f1e448]: Test Salon ls8uew
              - paragraph [ref=f1e449]: Auto-generated test business description ls8uew
              - generic [ref=f1e450]:
                - generic [ref=f1e451]: UTC
                - generic [ref=f1e452]: USD
            - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD" [ref=f1e453]:
              - generic [ref=f1e454]: Test Salon lxdrvs
              - paragraph [ref=f1e455]: Auto-generated test business description lxdrvs
              - generic [ref=f1e456]:
                - generic [ref=f1e457]: UTC
                - generic [ref=f1e458]: USD
            - button "Test Salon mmwtfq Auto-generated test business description mmwtfq UTC USD" [ref=f1e459]:
              - generic [ref=f1e460]: Test Salon mmwtfq
              - paragraph [ref=f1e461]: Auto-generated test business description mmwtfq
              - generic [ref=f1e462]:
                - generic [ref=f1e463]: UTC
                - generic [ref=f1e464]: USD
            - button "Test Salon ndj6b4 Auto-generated test business description ndj6b4 UTC USD" [ref=f1e465]:
              - generic [ref=f1e466]: Test Salon ndj6b4
              - paragraph [ref=f1e467]: Auto-generated test business description ndj6b4
              - generic [ref=f1e468]:
                - generic [ref=f1e469]: UTC
                - generic [ref=f1e470]: USD
            - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD" [ref=f1e471]:
              - generic [ref=f1e472]: Test Salon niqqre
              - paragraph [ref=f1e473]: Auto-generated test business description niqqre
              - generic [ref=f1e474]:
                - generic [ref=f1e475]: UTC
                - generic [ref=f1e476]: USD
            - button "Test Salon njflen Auto-generated test business description njflen UTC USD" [ref=f1e477]:
              - generic [ref=f1e478]: Test Salon njflen
              - paragraph [ref=f1e479]: Auto-generated test business description njflen
              - generic [ref=f1e480]:
                - generic [ref=f1e481]: UTC
                - generic [ref=f1e482]: USD
            - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD" [ref=f1e483]:
              - generic [ref=f1e484]: Test Salon nnnmtw
              - paragraph [ref=f1e485]: Auto-generated test business description nnnmtw
              - generic [ref=f1e486]:
                - generic [ref=f1e487]: UTC
                - generic [ref=f1e488]: USD
            - button "Test Salon nrc7yx Auto-generated test business description nrc7yx UTC USD" [ref=f1e489]:
              - generic [ref=f1e490]: Test Salon nrc7yx
              - paragraph [ref=f1e491]: Auto-generated test business description nrc7yx
              - generic [ref=f1e492]:
                - generic [ref=f1e493]: UTC
                - generic [ref=f1e494]: USD
            - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD" [ref=f1e495]:
              - generic [ref=f1e496]: Test Salon oeux2s
              - paragraph [ref=f1e497]: Auto-generated test business description oeux2s
              - generic [ref=f1e498]:
                - generic [ref=f1e499]: UTC
                - generic [ref=f1e500]: USD
            - button "Test Salon oqmwe8 UTC USD" [ref=f1e501]:
              - generic [ref=f1e502]: Test Salon oqmwe8
              - generic [ref=f1e503]:
                - generic [ref=f1e504]: UTC
                - generic [ref=f1e505]: USD
            - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD" [ref=f1e506]:
              - generic [ref=f1e507]: Test Salon orw3o4
              - paragraph [ref=f1e508]: Auto-generated test business description orw3o4
              - generic [ref=f1e509]:
                - generic [ref=f1e510]: UTC
                - generic [ref=f1e511]: USD
            - button "Test Salon ox1a1r Auto-generated test business description ox1a1r UTC USD" [ref=f1e512]:
              - generic [ref=f1e513]: Test Salon ox1a1r
              - paragraph [ref=f1e514]: Auto-generated test business description ox1a1r
              - generic [ref=f1e515]:
                - generic [ref=f1e516]: UTC
                - generic [ref=f1e517]: USD
            - button "Test Salon p1hgbn Auto-generated test business description p1hgbn UTC USD" [ref=f1e518]:
              - generic [ref=f1e519]: Test Salon p1hgbn
              - paragraph [ref=f1e520]: Auto-generated test business description p1hgbn
              - generic [ref=f1e521]:
                - generic [ref=f1e522]: UTC
                - generic [ref=f1e523]: USD
            - button "Test Salon p27b4v Auto-generated test business description p27b4v UTC USD" [ref=f1e524]:
              - generic [ref=f1e525]: Test Salon p27b4v
              - paragraph [ref=f1e526]: Auto-generated test business description p27b4v
              - generic [ref=f1e527]:
                - generic [ref=f1e528]: UTC
                - generic [ref=f1e529]: USD
            - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD" [ref=f1e530]:
              - generic [ref=f1e531]: Test Salon pyoepe
              - paragraph [ref=f1e532]: Auto-generated test business description pyoepe
              - generic [ref=f1e533]:
                - generic [ref=f1e534]: UTC
                - generic [ref=f1e535]: USD
            - button "Test Salon q65mxa Auto-generated test business description q65mxa UTC USD" [ref=f1e536]:
              - generic [ref=f1e537]: Test Salon q65mxa
              - paragraph [ref=f1e538]: Auto-generated test business description q65mxa
              - generic [ref=f1e539]:
                - generic [ref=f1e540]: UTC
                - generic [ref=f1e541]: USD
            - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD" [ref=f1e542]:
              - generic [ref=f1e543]: Test Salon qcm18x
              - paragraph [ref=f1e544]: Auto-generated test business description qcm18x
              - generic [ref=f1e545]:
                - generic [ref=f1e546]: UTC
                - generic [ref=f1e547]: USD
            - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD" [ref=f1e548]:
              - generic [ref=f1e549]: Test Salon qlbret
              - paragraph [ref=f1e550]: Auto-generated test business description qlbret
              - generic [ref=f1e551]:
                - generic [ref=f1e552]: UTC
                - generic [ref=f1e553]: USD
            - button "Test Salon qlz60s Auto-generated test business description qlz60s UTC USD" [ref=f1e554]:
              - generic [ref=f1e555]: Test Salon qlz60s
              - paragraph [ref=f1e556]: Auto-generated test business description qlz60s
              - generic [ref=f1e557]:
                - generic [ref=f1e558]: UTC
                - generic [ref=f1e559]: USD
            - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD" [ref=f1e560]:
              - generic [ref=f1e561]: Test Salon qr0hfk
              - paragraph [ref=f1e562]: Auto-generated test business description qr0hfk
              - generic [ref=f1e563]:
                - generic [ref=f1e564]: UTC
                - generic [ref=f1e565]: USD
            - button "Test Salon qzedc4 Auto-generated test business description qzedc4 UTC USD" [ref=f1e566]:
              - generic [ref=f1e567]: Test Salon qzedc4
              - paragraph [ref=f1e568]: Auto-generated test business description qzedc4
              - generic [ref=f1e569]:
                - generic [ref=f1e570]: UTC
                - generic [ref=f1e571]: USD
            - button "Test Salon r3vudz Auto-generated test business description r3vudz UTC USD" [ref=f1e572]:
              - generic [ref=f1e573]: Test Salon r3vudz
              - paragraph [ref=f1e574]: Auto-generated test business description r3vudz
              - generic [ref=f1e575]:
                - generic [ref=f1e576]: UTC
                - generic [ref=f1e577]: USD
            - button "Test Salon r82npz Auto-generated test business description r82npz UTC USD" [ref=f1e578]:
              - generic [ref=f1e579]: Test Salon r82npz
              - paragraph [ref=f1e580]: Auto-generated test business description r82npz
              - generic [ref=f1e581]:
                - generic [ref=f1e582]: UTC
                - generic [ref=f1e583]: USD
            - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD" [ref=f1e584]:
              - generic [ref=f1e585]: Test Salon r9cxkb
              - paragraph [ref=f1e586]: Auto-generated test business description r9cxkb
              - generic [ref=f1e587]:
                - generic [ref=f1e588]: UTC
                - generic [ref=f1e589]: USD
            - button "Test Salon rf1l22 Auto-generated test business description rf1l22 UTC USD" [ref=f1e590]:
              - generic [ref=f1e591]: Test Salon rf1l22
              - paragraph [ref=f1e592]: Auto-generated test business description rf1l22
              - generic [ref=f1e593]:
                - generic [ref=f1e594]: UTC
                - generic [ref=f1e595]: USD
            - button "Test Salon rolg7h Auto-generated test business description rolg7h UTC USD" [ref=f1e596]:
              - generic [ref=f1e597]: Test Salon rolg7h
              - paragraph [ref=f1e598]: Auto-generated test business description rolg7h
              - generic [ref=f1e599]:
                - generic [ref=f1e600]: UTC
                - generic [ref=f1e601]: USD
            - button "Test Salon s4buzl Auto-generated test business description s4buzl UTC USD" [ref=f1e602]:
              - generic [ref=f1e603]: Test Salon s4buzl
              - paragraph [ref=f1e604]: Auto-generated test business description s4buzl
              - generic [ref=f1e605]:
                - generic [ref=f1e606]: UTC
                - generic [ref=f1e607]: USD
            - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD" [ref=f1e608]:
              - generic [ref=f1e609]: Test Salon s7a7st
              - paragraph [ref=f1e610]: Auto-generated test business description s7a7st
              - generic [ref=f1e611]:
                - generic [ref=f1e612]: UTC
                - generic [ref=f1e613]: USD
            - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD" [ref=f1e614]:
              - generic [ref=f1e615]: Test Salon sky7cf
              - paragraph [ref=f1e616]: Auto-generated test business description sky7cf
              - generic [ref=f1e617]:
                - generic [ref=f1e618]: UTC
                - generic [ref=f1e619]: USD
            - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD" [ref=f1e620]:
              - generic [ref=f1e621]: Test Salon t9wjh7
              - paragraph [ref=f1e622]: Auto-generated test business description t9wjh7
              - generic [ref=f1e623]:
                - generic [ref=f1e624]: UTC
                - generic [ref=f1e625]: USD
            - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD" [ref=f1e626]:
              - generic [ref=f1e627]: Test Salon ta5ce7
              - paragraph [ref=f1e628]: Auto-generated test business description ta5ce7
              - generic [ref=f1e629]:
                - generic [ref=f1e630]: UTC
                - generic [ref=f1e631]: USD
            - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD" [ref=f1e632]:
              - generic [ref=f1e633]: Test Salon u0g7lb
              - paragraph [ref=f1e634]: Auto-generated test business description u0g7lb
              - generic [ref=f1e635]:
                - generic [ref=f1e636]: UTC
                - generic [ref=f1e637]: USD
            - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD" [ref=f1e638]:
              - generic [ref=f1e639]: Test Salon u8pzhc
              - paragraph [ref=f1e640]: Auto-generated test business description u8pzhc
              - generic [ref=f1e641]:
                - generic [ref=f1e642]: UTC
                - generic [ref=f1e643]: USD
            - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD" [ref=f1e644]:
              - generic [ref=f1e645]: Test Salon ub3aeu
              - paragraph [ref=f1e646]: Auto-generated test business description ub3aeu
              - generic [ref=f1e647]:
                - generic [ref=f1e648]: UTC
                - generic [ref=f1e649]: USD
            - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD" [ref=f1e650]:
              - generic [ref=f1e651]: Test Salon ui869c
              - paragraph [ref=f1e652]: Auto-generated test business description ui869c
              - generic [ref=f1e653]:
                - generic [ref=f1e654]: UTC
                - generic [ref=f1e655]: USD
            - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD" [ref=f1e656]:
              - generic [ref=f1e657]: Test Salon vamdvm
              - paragraph [ref=f1e658]: Auto-generated test business description vamdvm
              - generic [ref=f1e659]:
                - generic [ref=f1e660]: UTC
                - generic [ref=f1e661]: USD
            - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD" [ref=f1e662]:
              - generic [ref=f1e663]: Test Salon vsxf4h
              - paragraph [ref=f1e664]: Auto-generated test business description vsxf4h
              - generic [ref=f1e665]:
                - generic [ref=f1e666]: UTC
                - generic [ref=f1e667]: USD
            - button "Test Salon vyvnvm Auto-generated test business description vyvnvm UTC USD" [ref=f1e668]:
              - generic [ref=f1e669]: Test Salon vyvnvm
              - paragraph [ref=f1e670]: Auto-generated test business description vyvnvm
              - generic [ref=f1e671]:
                - generic [ref=f1e672]: UTC
                - generic [ref=f1e673]: USD
            - button "Test Salon wnb5i6 Auto-generated test business description wnb5i6 UTC USD" [ref=f1e674]:
              - generic [ref=f1e675]: Test Salon wnb5i6
              - paragraph [ref=f1e676]: Auto-generated test business description wnb5i6
              - generic [ref=f1e677]:
                - generic [ref=f1e678]: UTC
                - generic [ref=f1e679]: USD
            - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD" [ref=f1e680]:
              - generic [ref=f1e681]: Test Salon wpsv41
              - paragraph [ref=f1e682]: Auto-generated test business description wpsv41
              - generic [ref=f1e683]:
                - generic [ref=f1e684]: UTC
                - generic [ref=f1e685]: USD
            - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD" [ref=f1e686]:
              - generic [ref=f1e687]: Test Salon wqwz95
              - paragraph [ref=f1e688]: Auto-generated test business description wqwz95
              - generic [ref=f1e689]:
                - generic [ref=f1e690]: UTC
                - generic [ref=f1e691]: USD
            - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD" [ref=f1e692]:
              - generic [ref=f1e693]: Test Salon x4gtj1
              - paragraph [ref=f1e694]: Auto-generated test business description x4gtj1
              - generic [ref=f1e695]:
                - generic [ref=f1e696]: UTC
                - generic [ref=f1e697]: USD
            - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD" [ref=f1e698]:
              - generic [ref=f1e699]: Test Salon x9lli8
              - paragraph [ref=f1e700]: Auto-generated test business description x9lli8
              - generic [ref=f1e701]:
                - generic [ref=f1e702]: UTC
                - generic [ref=f1e703]: USD
            - button "Test Salon xoymd5 Auto-generated test business description xoymd5 UTC USD" [ref=f1e704]:
              - generic [ref=f1e705]: Test Salon xoymd5
              - paragraph [ref=f1e706]: Auto-generated test business description xoymd5
              - generic [ref=f1e707]:
                - generic [ref=f1e708]: UTC
                - generic [ref=f1e709]: USD
            - button "Test Salon xvqmlv UTC USD" [ref=f1e710]:
              - generic [ref=f1e711]: Test Salon xvqmlv
              - generic [ref=f1e712]:
                - generic [ref=f1e713]: UTC
                - generic [ref=f1e714]: USD
            - button "Test Salon y1a00e Auto-generated test business description y1a00e UTC USD" [ref=f1e715]:
              - generic [ref=f1e716]: Test Salon y1a00e
              - paragraph [ref=f1e717]: Auto-generated test business description y1a00e
              - generic [ref=f1e718]:
                - generic [ref=f1e719]: UTC
                - generic [ref=f1e720]: USD
            - button "Test Salon z5y8m6 Auto-generated test business description z5y8m6 UTC USD" [ref=f1e721]:
              - generic [ref=f1e722]: Test Salon z5y8m6
              - paragraph [ref=f1e723]: Auto-generated test business description z5y8m6
              - generic [ref=f1e724]:
                - generic [ref=f1e725]: UTC
                - generic [ref=f1e726]: USD
            - button "Test Salon zh7z25 Auto-generated test business description zh7z25 UTC USD" [ref=f1e727]:
              - generic [ref=f1e728]: Test Salon zh7z25
              - paragraph [ref=f1e729]: Auto-generated test business description zh7z25
              - generic [ref=f1e730]:
                - generic [ref=f1e731]: UTC
                - generic [ref=f1e732]: USD
            - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD" [ref=f1e733]:
              - generic [ref=f1e734]: Test Salon ztn2hy
              - paragraph [ref=f1e735]: Auto-generated test business description ztn2hy
              - generic [ref=f1e736]:
                - generic [ref=f1e737]: UTC
                - generic [ref=f1e738]: USD
            - button "Zen Spa UTC USD" [ref=f1e739]:
              - generic [ref=f1e740]: Zen Spa
              - generic [ref=f1e741]:
                - generic [ref=f1e742]: UTC
                - generic [ref=f1e743]: USD
            - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD" [ref=f1e744]:
              - generic [ref=f1e745]: chingcho
              - paragraph [ref=f1e746]: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
              - generic [ref=f1e747]:
                - generic [ref=f1e748]: UTC
                - generic [ref=f1e749]: USD
    - contentinfo [ref=f1e750]:
      - generic [ref=f1e751]:
        - generic [ref=f1e752]:
          - generic [ref=f1e753]: "Y"
          - generic [ref=f1e754]: Yarivo Appointments
          - generic [ref=f1e755]: ·
          - generic [ref=f1e756]: yarivo.com
        - generic [ref=f1e757]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=f1e763] [cursor=pointer]
  - alert [ref=f1e767]
```

# Test source

```ts
  1   | /**
  2   |  * DashboardPage: Page Object for the Owner Dashboard managing Appointments, Services, Staff, and Operating Hours.
  3   |  */
  4   | 
  5   | const { expect } = require('@playwright/test');
  6   | const BasePage = require('./BasePage');
  7   | 
  8   | class DashboardPage extends BasePage {
  9   |   /**
  10  |    * @param {import('@playwright/test').Page} page
  11  |    */
  12  |   constructor(page) {
  13  |     super(page);
  14  | 
  15  |     // Business Header Info
  16  |     this.businessTitle = page.locator('h2.font-bold').first();
  17  |     this.publicLinkText = page.locator('span.font-mono').first();
  18  | 
  19  |     // Tab buttons
  20  |     this.appointmentsTabBtn = page.getByRole('button', { name: /appointments/i });
  21  |     this.servicesTabBtn = page.getByRole('button', { name: /services/i });
  22  |     this.staffTabBtn = page.getByRole('button', { name: /staff/i });
  23  |     this.hoursTabBtn = page.getByRole('button', { name: /hours/i });
  24  | 
  25  |     // Appointments Tab Locators
  26  |     this.refreshAppointmentsBtn = page.getByRole('button', { name: /Refresh/i });
  27  |     this.appointmentCards = page.locator('div.divide-y > div');
  28  |     this.emptyAppointmentsMsg = page.getByText(/No appointments booked yet/i);
  29  | 
  30  |     // Services Tab Locators
  31  |     this.servicesList = page.locator('div.divide-y > div');
  32  |     this.serviceNameInput = page.locator('input[placeholder*="Haircut & Styling" i]').first();
  33  |     this.serviceDescInput = page.locator('input[placeholder*="Brief description" i]').first();
  34  |     this.serviceDurationInput = page.locator('label:has-text("Duration") + input, input[type="number"]').first();
  35  |     this.servicePriceInput = page.locator('label:has-text("Price") + input, input[type="number"]').nth(1);
  36  |     this.servicePrepBufferInput = page.locator('input[type="number"]').nth(2);
  37  |     this.serviceCleanupBufferInput = page.locator('input[type="number"]').nth(3);
  38  |     this.serviceActiveCheckbox = page.locator('input[type="checkbox"]:has-text("Active"), label:has-text("Active") input');
  39  |     this.saveServiceBtn = page.getByRole('button', { name: /Create Service|Update Service/i });
  40  |     this.cancelEditServiceBtn = page.getByRole('button', { name: /Cancel|Switch to New Service/i }).first();
  41  | 
  42  |     // Staff Tab Locators
  43  |     this.staffList = page.locator('div.divide-y > div');
  44  |     this.staffNameInput = page.locator('input[placeholder*="Alex Stylist" i]').first();
  45  |     this.staffEmailInput = page.locator('input[placeholder*="alex@mysalon.com" i]').first();
  46  |     this.staffPhoneInput = page.locator('input[placeholder*="+1 555-0100" i]').first();
  47  |     this.staffActiveCheckbox = page.locator('label:has-text("Active") input');
  48  |     this.saveStaffBtn = page.getByRole('button', { name: /Add Staff|Update Staff/i });
  49  |     this.cancelEditStaffBtn = page.getByRole('button', { name: /Cancel|Switch to New Staff/i }).first();
  50  | 
  51  |     // Business Hours Locators
  52  |     this.saveHoursBtn = page.getByRole('button', { name: /Save Operating Hours/i });
  53  |     this.dayRows = page.locator('div.space-y-3 > div');
  54  |   }
  55  | 
  56  |   // --- Tab Navigation ---
  57  |   async switchToAppointmentsTab() {
  58  |     await this.appointmentsTabBtn.click();
  59  |   }
  60  | 
  61  |   async switchToServicesTab() {
  62  |     await this.servicesTabBtn.click();
  63  |   }
  64  | 
  65  |   async switchToStaffTab() {
> 66  |     await this.staffTabBtn.click();
      |                            ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  67  |   }
  68  | 
  69  |   async switchToHoursTab() {
  70  |     await this.hoursTabBtn.click();
  71  |   }
  72  | 
  73  |   // --- Appointments Tab Methods ---
  74  |   async clickRefreshAppointments() {
  75  |     await this.refreshAppointmentsBtn.click();
  76  |   }
  77  | 
  78  |   async updateAppointmentStatus(appointmentIndex, actionName) {
  79  |     const card = this.appointmentCards.nth(appointmentIndex);
  80  |     const actionBtn = card.getByRole('button', { name: new RegExp(actionName, 'i') });
  81  |     await actionBtn.click();
  82  |   }
  83  | 
  84  |   async expectAppointmentStatus(appointmentIndex, statusText) {
  85  |     const card = this.appointmentCards.nth(appointmentIndex);
  86  |     await expect(card).toContainText(statusText);
  87  |   }
  88  | 
  89  |   // --- Services Tab Methods ---
  90  |   async fillServiceForm({ name, description, duration, price, bufferBefore, bufferAfter }) {
  91  |     if (name !== undefined) await this.serviceNameInput.fill(name);
  92  |     if (description !== undefined) await this.serviceDescInput.fill(description);
  93  |     if (duration !== undefined) await this.serviceDurationInput.fill(String(duration));
  94  |     if (price !== undefined) await this.servicePriceInput.fill(String(price));
  95  |     if (bufferBefore !== undefined) await this.servicePrepBufferInput.fill(String(bufferBefore));
  96  |     if (bufferAfter !== undefined) await this.serviceCleanupBufferInput.fill(String(bufferAfter));
  97  |   }
  98  | 
  99  |   async createService(serviceData) {
  100 |     await this.fillServiceForm(serviceData);
  101 |     await this.saveServiceBtn.click();
  102 |   }
  103 | 
  104 |   async selectServiceForEdit(serviceName) {
  105 |     const item = this.servicesList.filter({ hasText: serviceName }).first();
  106 |     await item.click();
  107 |   }
  108 | 
  109 |   async deleteService(serviceName) {
  110 |     const item = this.servicesList.filter({ hasText: serviceName }).first();
  111 |     const deleteBtn = item.locator('button[title="Delete service"], button[aria-label="Delete service"]').first();
  112 |     
  113 |     // Register dialog handler for window.confirm
  114 |     this.page.once('dialog', async (dialog) => {
  115 |       await dialog.accept();
  116 |     });
  117 |     await deleteBtn.click();
  118 |   }
  119 | 
  120 |   // --- Staff Tab Methods ---
  121 |   async fillStaffForm({ name, email, phone }) {
  122 |     if (name !== undefined) await this.staffNameInput.fill(name);
  123 |     if (email !== undefined) await this.staffEmailInput.fill(email);
  124 |     if (phone !== undefined) await this.staffPhoneInput.fill(phone);
  125 |   }
  126 | 
  127 |   async createStaff(staffData) {
  128 |     await this.fillStaffForm(staffData);
  129 |     await this.saveStaffBtn.click();
  130 |   }
  131 | 
  132 |   async selectStaffForEdit(staffName) {
  133 |     const item = this.staffList.filter({ hasText: staffName }).first();
  134 |     await item.click();
  135 |   }
  136 | 
  137 |   async deleteStaff(staffName) {
  138 |     const item = this.staffList.filter({ hasText: staffName }).first();
  139 |     const deleteBtn = item.locator('button[title="Delete staff member"], button[aria-label="Delete staff member"]').first();
  140 | 
  141 |     this.page.once('dialog', async (dialog) => {
  142 |       await dialog.accept();
  143 |     });
  144 |     await deleteBtn.click();
  145 |   }
  146 | 
  147 |   // --- Business Hours Methods ---
  148 |   async toggleDayOpen(dayIndex, isOpen) {
  149 |     const row = this.dayRows.nth(dayIndex);
  150 |     const checkbox = row.locator('input[type="checkbox"]');
  151 |     const isCurrentlyChecked = await checkbox.isChecked();
  152 |     if (isCurrentlyChecked !== isOpen) {
  153 |       await checkbox.click();
  154 |     }
  155 |   }
  156 | 
  157 |   async setDayTimes(dayIndex, openingTime, closingTime) {
  158 |     const row = this.dayRows.nth(dayIndex);
  159 |     const timeInputs = row.locator('input[type="time"]');
  160 |     if (await timeInputs.count() >= 2) {
  161 |       if (openingTime) await timeInputs.nth(0).fill(openingTime);
  162 |       if (closingTime) await timeInputs.nth(1).fill(closingTime);
  163 |     }
  164 |   }
  165 | 
  166 |   async saveBusinessHours() {
```