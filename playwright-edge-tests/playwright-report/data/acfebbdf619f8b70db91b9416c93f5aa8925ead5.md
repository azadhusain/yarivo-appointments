# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge\edge-booking-scenarios.spec.js >> @edge Public Booking Edge Cases & Boundaries >> should handle double-booking conflict (409) gracefully with error message
- Location: tests\edge\edge-booking-scenarios.spec.js:90:3

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[placeholder*="Jane Doe" i], input[placeholder*="name" i]').first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5] [cursor=pointer]:
          - generic [ref=e6]: "Y"
          - generic [ref=e7]:
            - generic [ref=e8]:
              - generic [ref=e9]: Yarivo
              - generic [ref=e10]: Global
            - generic [ref=e11]: Appointments
        - navigation [ref=e12]:
          - button "Public Booking" [ref=e13]
          - button "Business Login" [ref=e14]
          - button "Register Business" [ref=e15]
    - main [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - heading "Book an Appointment" [level=1] [ref=e19]
          - paragraph [ref=e20]: Select a business, choose your service, pick a date, and reserve your slot instantly.
        - generic [ref=e21]:
          - heading "1. Select Business" [level=2] [ref=e22]
          - generic [ref=e23]:
            - 'button "Agenda Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips: UTC USD" [active] [ref=e24]':
              - generic [ref=e25]: Agenda
              - paragraph [ref=e26]: "Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips:"
              - generic [ref=e27]:
                - generic [ref=e28]: UTC
                - generic [ref=e29]: USD
            - button "Apex Salon & Spa UTC USD" [ref=e30]:
              - generic [ref=e31]: Apex Salon & Spa
              - generic [ref=e32]:
                - generic [ref=e33]: UTC
                - generic [ref=e34]: USD
            - button "Azad Asia/Calcutta USD" [ref=e35]:
              - generic [ref=e36]: Azad
              - generic [ref=e37]:
                - generic [ref=e38]: Asia/Calcutta
                - generic [ref=e39]: USD
            - button "Crown Salon UTC USD" [ref=e40]:
              - generic [ref=e41]: Crown Salon
              - generic [ref=e42]:
                - generic [ref=e43]: UTC
                - generic [ref=e44]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=e45]:
              - generic [ref=e46]: Salon <script>alert("XSS")</script>
              - generic [ref=e47]:
                - generic [ref=e48]: UTC
                - generic [ref=e49]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=e50]:
              - generic [ref=e51]: Salon <script>alert("XSS")</script>
              - generic [ref=e52]:
                - generic [ref=e53]: UTC
                - generic [ref=e54]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=e55]:
              - generic [ref=e56]: Salon <script>alert("XSS")</script>
              - generic [ref=e57]:
                - generic [ref=e58]: UTC
                - generic [ref=e59]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=e60]:
              - generic [ref=e61]: Salon <script>alert("XSS")</script>
              - generic [ref=e62]:
                - generic [ref=e63]: UTC
                - generic [ref=e64]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=e65]:
              - generic [ref=e66]: Salon <script>alert("XSS")</script>
              - generic [ref=e67]:
                - generic [ref=e68]: UTC
                - generic [ref=e69]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=e70]:
              - generic [ref=e71]: Salon <script>alert("XSS")</script>
              - generic [ref=e72]:
                - generic [ref=e73]: UTC
                - generic [ref=e74]: USD
            - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD" [ref=e75]:
              - generic [ref=e76]: Test Salon 0amdq1
              - paragraph [ref=e77]: Auto-generated test business description 0amdq1
              - generic [ref=e78]:
                - generic [ref=e79]: UTC
                - generic [ref=e80]: USD
            - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD" [ref=e81]:
              - generic [ref=e82]: Test Salon 0bcq40
              - paragraph [ref=e83]: Auto-generated test business description 0bcq40
              - generic [ref=e84]:
                - generic [ref=e85]: UTC
                - generic [ref=e86]: USD
            - button "Test Salon 0bg9rw Auto-generated test business description 0bg9rw UTC USD" [ref=e87]:
              - generic [ref=e88]: Test Salon 0bg9rw
              - paragraph [ref=e89]: Auto-generated test business description 0bg9rw
              - generic [ref=e90]:
                - generic [ref=e91]: UTC
                - generic [ref=e92]: USD
            - button "Test Salon 0dcs33 Auto-generated test business description 0dcs33 UTC USD" [ref=e93]:
              - generic [ref=e94]: Test Salon 0dcs33
              - paragraph [ref=e95]: Auto-generated test business description 0dcs33
              - generic [ref=e96]:
                - generic [ref=e97]: UTC
                - generic [ref=e98]: USD
            - button "Test Salon 0kklgx Auto-generated test business description 0kklgx UTC USD" [ref=e99]:
              - generic [ref=e100]: Test Salon 0kklgx
              - paragraph [ref=e101]: Auto-generated test business description 0kklgx
              - generic [ref=e102]:
                - generic [ref=e103]: UTC
                - generic [ref=e104]: USD
            - button "Test Salon 0rleyb Auto-generated test business description 0rleyb UTC USD" [ref=e105]:
              - generic [ref=e106]: Test Salon 0rleyb
              - paragraph [ref=e107]: Auto-generated test business description 0rleyb
              - generic [ref=e108]:
                - generic [ref=e109]: UTC
                - generic [ref=e110]: USD
            - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD" [ref=e111]:
              - generic [ref=e112]: Test Salon 1bip1q
              - paragraph [ref=e113]: Auto-generated test business description 1bip1q
              - generic [ref=e114]:
                - generic [ref=e115]: UTC
                - generic [ref=e116]: USD
            - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD" [ref=e117]:
              - generic [ref=e118]: Test Salon 1gtheb
              - paragraph [ref=e119]: Auto-generated test business description 1gtheb
              - generic [ref=e120]:
                - generic [ref=e121]: UTC
                - generic [ref=e122]: USD
            - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD" [ref=e123]:
              - generic [ref=e124]: Test Salon 1hiobw
              - paragraph [ref=e125]: Auto-generated test business description 1hiobw
              - generic [ref=e126]:
                - generic [ref=e127]: UTC
                - generic [ref=e128]: USD
            - button "Test Salon 2ondoq Auto-generated test business description 2ondoq UTC USD" [ref=e129]:
              - generic [ref=e130]: Test Salon 2ondoq
              - paragraph [ref=e131]: Auto-generated test business description 2ondoq
              - generic [ref=e132]:
                - generic [ref=e133]: UTC
                - generic [ref=e134]: USD
            - button "Test Salon 2vlcr5 Auto-generated test business description 2vlcr5 UTC USD" [ref=e135]:
              - generic [ref=e136]: Test Salon 2vlcr5
              - paragraph [ref=e137]: Auto-generated test business description 2vlcr5
              - generic [ref=e138]:
                - generic [ref=e139]: UTC
                - generic [ref=e140]: USD
            - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD" [ref=e141]:
              - generic [ref=e142]: Test Salon 35kobd
              - paragraph [ref=e143]: Auto-generated test business description 35kobd
              - generic [ref=e144]:
                - generic [ref=e145]: UTC
                - generic [ref=e146]: USD
            - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD" [ref=e147]:
              - generic [ref=e148]: Test Salon 3kcg5c
              - paragraph [ref=e149]: Auto-generated test business description 3kcg5c
              - generic [ref=e150]:
                - generic [ref=e151]: UTC
                - generic [ref=e152]: USD
            - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD" [ref=e153]:
              - generic [ref=e154]: Test Salon 4odkr7
              - paragraph [ref=e155]: Auto-generated test business description 4odkr7
              - generic [ref=e156]:
                - generic [ref=e157]: UTC
                - generic [ref=e158]: USD
            - button "Test Salon 4xohph Auto-generated test business description 4xohph UTC USD" [ref=e159]:
              - generic [ref=e160]: Test Salon 4xohph
              - paragraph [ref=e161]: Auto-generated test business description 4xohph
              - generic [ref=e162]:
                - generic [ref=e163]: UTC
                - generic [ref=e164]: USD
            - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD" [ref=e165]:
              - generic [ref=e166]: Test Salon 5kpeld
              - paragraph [ref=e167]: Auto-generated test business description 5kpeld
              - generic [ref=e168]:
                - generic [ref=e169]: UTC
                - generic [ref=e170]: USD
            - button "Test Salon 68wan7 Auto-generated test business description 68wan7 UTC USD" [ref=e171]:
              - generic [ref=e172]: Test Salon 68wan7
              - paragraph [ref=e173]: Auto-generated test business description 68wan7
              - generic [ref=e174]:
                - generic [ref=e175]: UTC
                - generic [ref=e176]: USD
            - button "Test Salon 6us1xu Auto-generated test business description 6us1xu UTC USD" [ref=e177]:
              - generic [ref=e178]: Test Salon 6us1xu
              - paragraph [ref=e179]: Auto-generated test business description 6us1xu
              - generic [ref=e180]:
                - generic [ref=e181]: UTC
                - generic [ref=e182]: USD
            - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD" [ref=e183]:
              - generic [ref=e184]: Test Salon 6xqwra
              - paragraph [ref=e185]: Auto-generated test business description 6xqwra
              - generic [ref=e186]:
                - generic [ref=e187]: UTC
                - generic [ref=e188]: USD
            - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD" [ref=e189]:
              - generic [ref=e190]: Test Salon 76cxtv
              - paragraph [ref=e191]: Auto-generated test business description 76cxtv
              - generic [ref=e192]:
                - generic [ref=e193]: UTC
                - generic [ref=e194]: USD
            - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD" [ref=e195]:
              - generic [ref=e196]: Test Salon 7bit9w
              - paragraph [ref=e197]: Auto-generated test business description 7bit9w
              - generic [ref=e198]:
                - generic [ref=e199]: UTC
                - generic [ref=e200]: USD
            - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD" [ref=e201]:
              - generic [ref=e202]: Test Salon 7nf9hv
              - paragraph [ref=e203]: Auto-generated test business description 7nf9hv
              - generic [ref=e204]:
                - generic [ref=e205]: UTC
                - generic [ref=e206]: USD
            - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD" [ref=e207]:
              - generic [ref=e208]: Test Salon 7o4pn7
              - paragraph [ref=e209]: Auto-generated test business description 7o4pn7
              - generic [ref=e210]:
                - generic [ref=e211]: UTC
                - generic [ref=e212]: USD
            - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD" [ref=e213]:
              - generic [ref=e214]: Test Salon 8h9i5t
              - paragraph [ref=e215]: Auto-generated test business description 8h9i5t
              - generic [ref=e216]:
                - generic [ref=e217]: UTC
                - generic [ref=e218]: USD
            - button "Test Salon 9y7j6v Auto-generated test business description 9y7j6v UTC USD" [ref=e219]:
              - generic [ref=e220]: Test Salon 9y7j6v
              - paragraph [ref=e221]: Auto-generated test business description 9y7j6v
              - generic [ref=e222]:
                - generic [ref=e223]: UTC
                - generic [ref=e224]: USD
            - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD" [ref=e225]:
              - generic [ref=e226]: Test Salon a68qlk
              - paragraph [ref=e227]: Auto-generated test business description a68qlk
              - generic [ref=e228]:
                - generic [ref=e229]: UTC
                - generic [ref=e230]: USD
            - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD" [ref=e231]:
              - generic [ref=e232]: Test Salon asymmy
              - paragraph [ref=e233]: Auto-generated test business description asymmy
              - generic [ref=e234]:
                - generic [ref=e235]: UTC
                - generic [ref=e236]: USD
            - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD" [ref=e237]:
              - generic [ref=e238]: Test Salon atz1m3
              - paragraph [ref=e239]: Auto-generated test business description atz1m3
              - generic [ref=e240]:
                - generic [ref=e241]: UTC
                - generic [ref=e242]: USD
            - button "Test Salon b2od8p Auto-generated test business description b2od8p UTC USD" [ref=e243]:
              - generic [ref=e244]: Test Salon b2od8p
              - paragraph [ref=e245]: Auto-generated test business description b2od8p
              - generic [ref=e246]:
                - generic [ref=e247]: UTC
                - generic [ref=e248]: USD
            - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD" [ref=e249]:
              - generic [ref=e250]: Test Salon b76urd
              - paragraph [ref=e251]: Auto-generated test business description b76urd
              - generic [ref=e252]:
                - generic [ref=e253]: UTC
                - generic [ref=e254]: USD
            - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD" [ref=e255]:
              - generic [ref=e256]: Test Salon btnwca
              - paragraph [ref=e257]: Auto-generated test business description btnwca
              - generic [ref=e258]:
                - generic [ref=e259]: UTC
                - generic [ref=e260]: USD
            - button "Test Salon buvlm6 Auto-generated test business description buvlm6 UTC USD" [ref=e261]:
              - generic [ref=e262]: Test Salon buvlm6
              - paragraph [ref=e263]: Auto-generated test business description buvlm6
              - generic [ref=e264]:
                - generic [ref=e265]: UTC
                - generic [ref=e266]: USD
            - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD" [ref=e267]:
              - generic [ref=e268]: Test Salon c0uqdl
              - paragraph [ref=e269]: Auto-generated test business description c0uqdl
              - generic [ref=e270]:
                - generic [ref=e271]: UTC
                - generic [ref=e272]: USD
            - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD" [ref=e273]:
              - generic [ref=e274]: Test Salon cemiq4
              - paragraph [ref=e275]: Auto-generated test business description cemiq4
              - generic [ref=e276]:
                - generic [ref=e277]: UTC
                - generic [ref=e278]: USD
            - button "Test Salon cktfm5 Auto-generated test business description cktfm5 UTC USD" [ref=e279]:
              - generic [ref=e280]: Test Salon cktfm5
              - paragraph [ref=e281]: Auto-generated test business description cktfm5
              - generic [ref=e282]:
                - generic [ref=e283]: UTC
                - generic [ref=e284]: USD
            - button "Test Salon cr33gn Auto-generated test business description cr33gn UTC USD" [ref=e285]:
              - generic [ref=e286]: Test Salon cr33gn
              - paragraph [ref=e287]: Auto-generated test business description cr33gn
              - generic [ref=e288]:
                - generic [ref=e289]: UTC
                - generic [ref=e290]: USD
            - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD" [ref=e291]:
              - generic [ref=e292]: Test Salon cs0sk6
              - paragraph [ref=e293]: Auto-generated test business description cs0sk6
              - generic [ref=e294]:
                - generic [ref=e295]: UTC
                - generic [ref=e296]: USD
            - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD" [ref=e297]:
              - generic [ref=e298]: Test Salon d2s8sx
              - paragraph [ref=e299]: Auto-generated test business description d2s8sx
              - generic [ref=e300]:
                - generic [ref=e301]: UTC
                - generic [ref=e302]: USD
            - button "Test Salon e2cvo6 Auto-generated test business description e2cvo6 UTC USD" [ref=e303]:
              - generic [ref=e304]: Test Salon e2cvo6
              - paragraph [ref=e305]: Auto-generated test business description e2cvo6
              - generic [ref=e306]:
                - generic [ref=e307]: UTC
                - generic [ref=e308]: USD
            - button "Test Salon e6ccjp Auto-generated test business description e6ccjp UTC USD" [ref=e309]:
              - generic [ref=e310]: Test Salon e6ccjp
              - paragraph [ref=e311]: Auto-generated test business description e6ccjp
              - generic [ref=e312]:
                - generic [ref=e313]: UTC
                - generic [ref=e314]: USD
            - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD" [ref=e315]:
              - generic [ref=e316]: Test Salon egni33
              - paragraph [ref=e317]: Auto-generated test business description egni33
              - generic [ref=e318]:
                - generic [ref=e319]: UTC
                - generic [ref=e320]: USD
            - button "Test Salon eog81f Auto-generated test business description eog81f UTC USD" [ref=e321]:
              - generic [ref=e322]: Test Salon eog81f
              - paragraph [ref=e323]: Auto-generated test business description eog81f
              - generic [ref=e324]:
                - generic [ref=e325]: UTC
                - generic [ref=e326]: USD
            - button "Test Salon esyzer Auto-generated test business description esyzer UTC USD" [ref=e327]:
              - generic [ref=e328]: Test Salon esyzer
              - paragraph [ref=e329]: Auto-generated test business description esyzer
              - generic [ref=e330]:
                - generic [ref=e331]: UTC
                - generic [ref=e332]: USD
            - button "Test Salon f39zeb Auto-generated test business description f39zeb UTC USD" [ref=e333]:
              - generic [ref=e334]: Test Salon f39zeb
              - paragraph [ref=e335]: Auto-generated test business description f39zeb
              - generic [ref=e336]:
                - generic [ref=e337]: UTC
                - generic [ref=e338]: USD
            - button "Test Salon f66hvn Auto-generated test business description f66hvn UTC USD" [ref=e339]:
              - generic [ref=e340]: Test Salon f66hvn
              - paragraph [ref=e341]: Auto-generated test business description f66hvn
              - generic [ref=e342]:
                - generic [ref=e343]: UTC
                - generic [ref=e344]: USD
            - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD" [ref=e345]:
              - generic [ref=e346]: Test Salon fnk1tt
              - paragraph [ref=e347]: Auto-generated test business description fnk1tt
              - generic [ref=e348]:
                - generic [ref=e349]: UTC
                - generic [ref=e350]: USD
            - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD" [ref=e351]:
              - generic [ref=e352]: Test Salon fwgmjd
              - paragraph [ref=e353]: Auto-generated test business description fwgmjd
              - generic [ref=e354]:
                - generic [ref=e355]: UTC
                - generic [ref=e356]: USD
            - button "Test Salon g4v7yp Auto-generated test business description g4v7yp UTC USD" [ref=e357]:
              - generic [ref=e358]: Test Salon g4v7yp
              - paragraph [ref=e359]: Auto-generated test business description g4v7yp
              - generic [ref=e360]:
                - generic [ref=e361]: UTC
                - generic [ref=e362]: USD
            - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD" [ref=e363]:
              - generic [ref=e364]: Test Salon gi47ns
              - paragraph [ref=e365]: Auto-generated test business description gi47ns
              - generic [ref=e366]:
                - generic [ref=e367]: UTC
                - generic [ref=e368]: USD
            - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD" [ref=e369]:
              - generic [ref=e370]: Test Salon gl6fqe
              - paragraph [ref=e371]: Auto-generated test business description gl6fqe
              - generic [ref=e372]:
                - generic [ref=e373]: UTC
                - generic [ref=e374]: USD
            - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD" [ref=e375]:
              - generic [ref=e376]: Test Salon gl7ea7
              - paragraph [ref=e377]: Auto-generated test business description gl7ea7
              - generic [ref=e378]:
                - generic [ref=e379]: UTC
                - generic [ref=e380]: USD
            - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD" [ref=e381]:
              - generic [ref=e382]: Test Salon hxzb30
              - paragraph [ref=e383]: Auto-generated test business description hxzb30
              - generic [ref=e384]:
                - generic [ref=e385]: UTC
                - generic [ref=e386]: USD
            - button "Test Salon hywbat Auto-generated test business description hywbat UTC USD" [ref=e387]:
              - generic [ref=e388]: Test Salon hywbat
              - paragraph [ref=e389]: Auto-generated test business description hywbat
              - generic [ref=e390]:
                - generic [ref=e391]: UTC
                - generic [ref=e392]: USD
            - button "Test Salon i2ygf8 Auto-generated test business description i2ygf8 UTC USD" [ref=e393]:
              - generic [ref=e394]: Test Salon i2ygf8
              - paragraph [ref=e395]: Auto-generated test business description i2ygf8
              - generic [ref=e396]:
                - generic [ref=e397]: UTC
                - generic [ref=e398]: USD
            - button "Test Salon igp24q Auto-generated test business description igp24q UTC USD" [ref=e399]:
              - generic [ref=e400]: Test Salon igp24q
              - paragraph [ref=e401]: Auto-generated test business description igp24q
              - generic [ref=e402]:
                - generic [ref=e403]: UTC
                - generic [ref=e404]: USD
            - button "Test Salon io5wbl Auto-generated test business description io5wbl UTC USD" [ref=e405]:
              - generic [ref=e406]: Test Salon io5wbl
              - paragraph [ref=e407]: Auto-generated test business description io5wbl
              - generic [ref=e408]:
                - generic [ref=e409]: UTC
                - generic [ref=e410]: USD
            - button "Test Salon iq4yfy Auto-generated test business description iq4yfy UTC USD" [ref=e411]:
              - generic [ref=e412]: Test Salon iq4yfy
              - paragraph [ref=e413]: Auto-generated test business description iq4yfy
              - generic [ref=e414]:
                - generic [ref=e415]: UTC
                - generic [ref=e416]: USD
            - button "Test Salon j9kwz5 Auto-generated test business description j9kwz5 UTC USD" [ref=e417]:
              - generic [ref=e418]: Test Salon j9kwz5
              - paragraph [ref=e419]: Auto-generated test business description j9kwz5
              - generic [ref=e420]:
                - generic [ref=e421]: UTC
                - generic [ref=e422]: USD
            - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD" [ref=e423]:
              - generic [ref=e424]: Test Salon ls8uew
              - paragraph [ref=e425]: Auto-generated test business description ls8uew
              - generic [ref=e426]:
                - generic [ref=e427]: UTC
                - generic [ref=e428]: USD
            - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD" [ref=e429]:
              - generic [ref=e430]: Test Salon lxdrvs
              - paragraph [ref=e431]: Auto-generated test business description lxdrvs
              - generic [ref=e432]:
                - generic [ref=e433]: UTC
                - generic [ref=e434]: USD
            - button "Test Salon ndj6b4 Auto-generated test business description ndj6b4 UTC USD" [ref=e435]:
              - generic [ref=e436]: Test Salon ndj6b4
              - paragraph [ref=e437]: Auto-generated test business description ndj6b4
              - generic [ref=e438]:
                - generic [ref=e439]: UTC
                - generic [ref=e440]: USD
            - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD" [ref=e441]:
              - generic [ref=e442]: Test Salon niqqre
              - paragraph [ref=e443]: Auto-generated test business description niqqre
              - generic [ref=e444]:
                - generic [ref=e445]: UTC
                - generic [ref=e446]: USD
            - button "Test Salon njflen Auto-generated test business description njflen UTC USD" [ref=e447]:
              - generic [ref=e448]: Test Salon njflen
              - paragraph [ref=e449]: Auto-generated test business description njflen
              - generic [ref=e450]:
                - generic [ref=e451]: UTC
                - generic [ref=e452]: USD
            - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD" [ref=e453]:
              - generic [ref=e454]: Test Salon nnnmtw
              - paragraph [ref=e455]: Auto-generated test business description nnnmtw
              - generic [ref=e456]:
                - generic [ref=e457]: UTC
                - generic [ref=e458]: USD
            - button "Test Salon nrc7yx Auto-generated test business description nrc7yx UTC USD" [ref=e459]:
              - generic [ref=e460]: Test Salon nrc7yx
              - paragraph [ref=e461]: Auto-generated test business description nrc7yx
              - generic [ref=e462]:
                - generic [ref=e463]: UTC
                - generic [ref=e464]: USD
            - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD" [ref=e465]:
              - generic [ref=e466]: Test Salon oeux2s
              - paragraph [ref=e467]: Auto-generated test business description oeux2s
              - generic [ref=e468]:
                - generic [ref=e469]: UTC
                - generic [ref=e470]: USD
            - button "Test Salon oqmwe8 UTC USD" [ref=e471]:
              - generic [ref=e472]: Test Salon oqmwe8
              - generic [ref=e473]:
                - generic [ref=e474]: UTC
                - generic [ref=e475]: USD
            - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD" [ref=e476]:
              - generic [ref=e477]: Test Salon orw3o4
              - paragraph [ref=e478]: Auto-generated test business description orw3o4
              - generic [ref=e479]:
                - generic [ref=e480]: UTC
                - generic [ref=e481]: USD
            - button "Test Salon ox1a1r Auto-generated test business description ox1a1r UTC USD" [ref=e482]:
              - generic [ref=e483]: Test Salon ox1a1r
              - paragraph [ref=e484]: Auto-generated test business description ox1a1r
              - generic [ref=e485]:
                - generic [ref=e486]: UTC
                - generic [ref=e487]: USD
            - button "Test Salon p1hgbn Auto-generated test business description p1hgbn UTC USD" [ref=e488]:
              - generic [ref=e489]: Test Salon p1hgbn
              - paragraph [ref=e490]: Auto-generated test business description p1hgbn
              - generic [ref=e491]:
                - generic [ref=e492]: UTC
                - generic [ref=e493]: USD
            - button "Test Salon p27b4v Auto-generated test business description p27b4v UTC USD" [ref=e494]:
              - generic [ref=e495]: Test Salon p27b4v
              - paragraph [ref=e496]: Auto-generated test business description p27b4v
              - generic [ref=e497]:
                - generic [ref=e498]: UTC
                - generic [ref=e499]: USD
            - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD" [ref=e500]:
              - generic [ref=e501]: Test Salon pyoepe
              - paragraph [ref=e502]: Auto-generated test business description pyoepe
              - generic [ref=e503]:
                - generic [ref=e504]: UTC
                - generic [ref=e505]: USD
            - button "Test Salon q65mxa Auto-generated test business description q65mxa UTC USD" [ref=e506]:
              - generic [ref=e507]: Test Salon q65mxa
              - paragraph [ref=e508]: Auto-generated test business description q65mxa
              - generic [ref=e509]:
                - generic [ref=e510]: UTC
                - generic [ref=e511]: USD
            - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD" [ref=e512]:
              - generic [ref=e513]: Test Salon qcm18x
              - paragraph [ref=e514]: Auto-generated test business description qcm18x
              - generic [ref=e515]:
                - generic [ref=e516]: UTC
                - generic [ref=e517]: USD
            - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD" [ref=e518]:
              - generic [ref=e519]: Test Salon qlbret
              - paragraph [ref=e520]: Auto-generated test business description qlbret
              - generic [ref=e521]:
                - generic [ref=e522]: UTC
                - generic [ref=e523]: USD
            - button "Test Salon qlz60s Auto-generated test business description qlz60s UTC USD" [ref=e524]:
              - generic [ref=e525]: Test Salon qlz60s
              - paragraph [ref=e526]: Auto-generated test business description qlz60s
              - generic [ref=e527]:
                - generic [ref=e528]: UTC
                - generic [ref=e529]: USD
            - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD" [ref=e530]:
              - generic [ref=e531]: Test Salon qr0hfk
              - paragraph [ref=e532]: Auto-generated test business description qr0hfk
              - generic [ref=e533]:
                - generic [ref=e534]: UTC
                - generic [ref=e535]: USD
            - button "Test Salon qzedc4 Auto-generated test business description qzedc4 UTC USD" [ref=e536]:
              - generic [ref=e537]: Test Salon qzedc4
              - paragraph [ref=e538]: Auto-generated test business description qzedc4
              - generic [ref=e539]:
                - generic [ref=e540]: UTC
                - generic [ref=e541]: USD
            - button "Test Salon r82npz Auto-generated test business description r82npz UTC USD" [ref=e542]:
              - generic [ref=e543]: Test Salon r82npz
              - paragraph [ref=e544]: Auto-generated test business description r82npz
              - generic [ref=e545]:
                - generic [ref=e546]: UTC
                - generic [ref=e547]: USD
            - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD" [ref=e548]:
              - generic [ref=e549]: Test Salon r9cxkb
              - paragraph [ref=e550]: Auto-generated test business description r9cxkb
              - generic [ref=e551]:
                - generic [ref=e552]: UTC
                - generic [ref=e553]: USD
            - button "Test Salon rf1l22 Auto-generated test business description rf1l22 UTC USD" [ref=e554]:
              - generic [ref=e555]: Test Salon rf1l22
              - paragraph [ref=e556]: Auto-generated test business description rf1l22
              - generic [ref=e557]:
                - generic [ref=e558]: UTC
                - generic [ref=e559]: USD
            - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD" [ref=e560]:
              - generic [ref=e561]: Test Salon s7a7st
              - paragraph [ref=e562]: Auto-generated test business description s7a7st
              - generic [ref=e563]:
                - generic [ref=e564]: UTC
                - generic [ref=e565]: USD
            - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD" [ref=e566]:
              - generic [ref=e567]: Test Salon sky7cf
              - paragraph [ref=e568]: Auto-generated test business description sky7cf
              - generic [ref=e569]:
                - generic [ref=e570]: UTC
                - generic [ref=e571]: USD
            - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD" [ref=e572]:
              - generic [ref=e573]: Test Salon t9wjh7
              - paragraph [ref=e574]: Auto-generated test business description t9wjh7
              - generic [ref=e575]:
                - generic [ref=e576]: UTC
                - generic [ref=e577]: USD
            - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD" [ref=e578]:
              - generic [ref=e579]: Test Salon ta5ce7
              - paragraph [ref=e580]: Auto-generated test business description ta5ce7
              - generic [ref=e581]:
                - generic [ref=e582]: UTC
                - generic [ref=e583]: USD
            - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD" [ref=e584]:
              - generic [ref=e585]: Test Salon u0g7lb
              - paragraph [ref=e586]: Auto-generated test business description u0g7lb
              - generic [ref=e587]:
                - generic [ref=e588]: UTC
                - generic [ref=e589]: USD
            - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD" [ref=e590]:
              - generic [ref=e591]: Test Salon u8pzhc
              - paragraph [ref=e592]: Auto-generated test business description u8pzhc
              - generic [ref=e593]:
                - generic [ref=e594]: UTC
                - generic [ref=e595]: USD
            - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD" [ref=e596]:
              - generic [ref=e597]: Test Salon ub3aeu
              - paragraph [ref=e598]: Auto-generated test business description ub3aeu
              - generic [ref=e599]:
                - generic [ref=e600]: UTC
                - generic [ref=e601]: USD
            - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD" [ref=e602]:
              - generic [ref=e603]: Test Salon ui869c
              - paragraph [ref=e604]: Auto-generated test business description ui869c
              - generic [ref=e605]:
                - generic [ref=e606]: UTC
                - generic [ref=e607]: USD
            - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD" [ref=e608]:
              - generic [ref=e609]: Test Salon vamdvm
              - paragraph [ref=e610]: Auto-generated test business description vamdvm
              - generic [ref=e611]:
                - generic [ref=e612]: UTC
                - generic [ref=e613]: USD
            - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD" [ref=e614]:
              - generic [ref=e615]: Test Salon vsxf4h
              - paragraph [ref=e616]: Auto-generated test business description vsxf4h
              - generic [ref=e617]:
                - generic [ref=e618]: UTC
                - generic [ref=e619]: USD
            - button "Test Salon vyvnvm Auto-generated test business description vyvnvm UTC USD" [ref=e620]:
              - generic [ref=e621]: Test Salon vyvnvm
              - paragraph [ref=e622]: Auto-generated test business description vyvnvm
              - generic [ref=e623]:
                - generic [ref=e624]: UTC
                - generic [ref=e625]: USD
            - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD" [ref=e626]:
              - generic [ref=e627]: Test Salon wpsv41
              - paragraph [ref=e628]: Auto-generated test business description wpsv41
              - generic [ref=e629]:
                - generic [ref=e630]: UTC
                - generic [ref=e631]: USD
            - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD" [ref=e632]:
              - generic [ref=e633]: Test Salon wqwz95
              - paragraph [ref=e634]: Auto-generated test business description wqwz95
              - generic [ref=e635]:
                - generic [ref=e636]: UTC
                - generic [ref=e637]: USD
            - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD" [ref=e638]:
              - generic [ref=e639]: Test Salon x4gtj1
              - paragraph [ref=e640]: Auto-generated test business description x4gtj1
              - generic [ref=e641]:
                - generic [ref=e642]: UTC
                - generic [ref=e643]: USD
            - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD" [ref=e644]:
              - generic [ref=e645]: Test Salon x9lli8
              - paragraph [ref=e646]: Auto-generated test business description x9lli8
              - generic [ref=e647]:
                - generic [ref=e648]: UTC
                - generic [ref=e649]: USD
            - button "Test Salon xoymd5 Auto-generated test business description xoymd5 UTC USD" [ref=e650]:
              - generic [ref=e651]: Test Salon xoymd5
              - paragraph [ref=e652]: Auto-generated test business description xoymd5
              - generic [ref=e653]:
                - generic [ref=e654]: UTC
                - generic [ref=e655]: USD
            - button "Test Salon xvqmlv UTC USD" [ref=e656]:
              - generic [ref=e657]: Test Salon xvqmlv
              - generic [ref=e658]:
                - generic [ref=e659]: UTC
                - generic [ref=e660]: USD
            - button "Test Salon y1a00e Auto-generated test business description y1a00e UTC USD" [ref=e661]:
              - generic [ref=e662]: Test Salon y1a00e
              - paragraph [ref=e663]: Auto-generated test business description y1a00e
              - generic [ref=e664]:
                - generic [ref=e665]: UTC
                - generic [ref=e666]: USD
            - button "Test Salon z5y8m6 Auto-generated test business description z5y8m6 UTC USD" [ref=e667]:
              - generic [ref=e668]: Test Salon z5y8m6
              - paragraph [ref=e669]: Auto-generated test business description z5y8m6
              - generic [ref=e670]:
                - generic [ref=e671]: UTC
                - generic [ref=e672]: USD
            - button "Test Salon zh7z25 Auto-generated test business description zh7z25 UTC USD" [ref=e673]:
              - generic [ref=e674]: Test Salon zh7z25
              - paragraph [ref=e675]: Auto-generated test business description zh7z25
              - generic [ref=e676]:
                - generic [ref=e677]: UTC
                - generic [ref=e678]: USD
            - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD" [ref=e679]:
              - generic [ref=e680]: Test Salon ztn2hy
              - paragraph [ref=e681]: Auto-generated test business description ztn2hy
              - generic [ref=e682]:
                - generic [ref=e683]: UTC
                - generic [ref=e684]: USD
            - button "Zen Spa UTC USD" [ref=e685]:
              - generic [ref=e686]: Zen Spa
              - generic [ref=e687]:
                - generic [ref=e688]: UTC
                - generic [ref=e689]: USD
            - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD" [ref=e690]:
              - generic [ref=e691]: chingcho
              - paragraph [ref=e692]: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
              - generic [ref=e693]:
                - generic [ref=e694]: UTC
                - generic [ref=e695]: USD
        - generic [ref=e696]:
          - generic [ref=e697]:
            - heading "Agenda" [level=3] [ref=e698]
            - paragraph [ref=e699]: No address listed · No phone
          - separator [ref=e700]
          - generic [ref=e701]:
            - heading "2. Select Service" [level=4] [ref=e702]
            - button "Standard Appointment 50.00 USD General appointment service ⏱️ 30 mins" [ref=e704]:
              - generic [ref=e705]:
                - generic [ref=e706]: Standard Appointment
                - generic [ref=e707]: 50.00 USD
              - paragraph [ref=e708]: General appointment service
              - generic [ref=e709]: ⏱️ 30 mins
          - generic [ref=e710]:
            - generic [ref=e711]:
              - generic [ref=e712]: Select Date
              - button "📅 Sun, Aug 23, 2026 ▼" [ref=e714] [cursor=pointer]:
                - generic [ref=e715]:
                  - generic [ref=e716]: 📅
                  - generic [ref=e717]: Sun, Aug 23, 2026
                - generic [ref=e718]: ▼
            - generic [ref=e719]:
              - generic [ref=e720]: Preferred Staff (Optional)
              - combobox [ref=e721]:
                - option "Any available staff member" [selected]
                - option "Primary Specialist"
          - generic [ref=e722]:
            - generic [ref=e724]:
              - heading "3. Available Slots" [level=4] [ref=e725]
              - generic [ref=e726]: All times shown in business timezone (UTC)
            - paragraph [ref=e727]: No slots available for this date/service.
    - contentinfo [ref=e728]:
      - generic [ref=e729]:
        - generic [ref=e730]:
          - generic [ref=e731]: "Y"
          - generic [ref=e732]: Yarivo Appointments
          - generic [ref=e733]: ·
          - generic [ref=e734]: yarivo.com
        - generic [ref=e735]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=e741] [cursor=pointer]
  - alert [ref=e745]
```

# Test source

```ts
  1   | /**
  2   |  * PublicBookingPage: Page Object for the customer-facing booking flow.
  3   |  */
  4   | 
  5   | const { expect } = require('@playwright/test');
  6   | const BasePage = require('./BasePage');
  7   | 
  8   | class PublicBookingPage extends BasePage {
  9   |   /**
  10  |    * @param {import('@playwright/test').Page} page
  11  |    */
  12  |   constructor(page) {
  13  |     super(page);
  14  | 
  15  |     // Business selection
  16  |     this.businessCards = page.locator('div[class*="cursor-pointer"] h3, div[class*="cursor-pointer"] div.font-semibold');
  17  |     this.businessListContainer = page.locator('div.grid');
  18  |     this.changeBusinessBtn = page.getByRole('button', { name: /Change/i });
  19  |     this.selectedBusinessHeader = page.locator('div.border h3, div.border h2');
  20  | 
  21  |     // Service & Staff selectors
  22  |     this.serviceRadios = page.locator('input[type="radio"][name="service"]');
  23  |     this.serviceCards = page.locator('label:has(input[name="service"]), div:has-text("min")');
  24  |     this.staffRadios = page.locator('input[type="radio"][name="staff"]');
  25  | 
  26  |     // Custom Date Picker
  27  |     this.datePickerTrigger = page.locator('button:has-text("📅")');
  28  |     this.datePickerPopover = page.locator('div.z-50');
  29  |     this.datePickerNextMonth = page.getByRole('button', { name: '›' });
  30  |     this.datePickerPrevMonth = page.getByRole('button', { name: '‹' });
  31  | 
  32  |     // Available Slots
  33  |     this.slotsContainer = page.locator('div.grid');
  34  |     this.slotButtons = page.locator('button:has-text(":")');
  35  |     this.noSlotsMessage = page.getByText(/No available slots for this date|Closed/i);
  36  |     this.loadingSlotsSpinner = page.getByText(/Loading available slots.../i);
  37  | 
  38  |     // Customer Form Inputs
  39  |     this.nameInput = page.locator('input[placeholder*="Jane Doe" i], input[placeholder*="name" i]').first();
  40  |     this.emailInput = page.locator('input[type="email"], input[placeholder*="jane@example.com" i]').first();
  41  |     this.phoneInput = page.locator('input[type="tel"], input[placeholder*="+1 555" i]').first();
  42  |     this.notesInput = page.locator('textarea, input[placeholder*="Special requests" i], input[placeholder*="notes" i]').first();
  43  |     this.confirmBookingBtn = page.getByRole('button', { name: /Book Appointment|Confirm Booking|Confirming\.\.\./i });
  44  | 
  45  |     // Field Validation Errors
  46  |     this.fieldErrors = page.locator('p.text-red-600, p.text-red-400');
  47  |     this.slotError = page.locator('p:has-text("Please choose an appointment time slot")');
  48  | 
  49  |     // Success State Card
  50  |     this.bookingSuccessCard = page.locator('div:has-text("Appointment Confirmed"), div:has-text("🎉")');
  51  |     this.bookAnotherBtn = page.getByRole('button', { name: /Book Another Appointment/i });
  52  |   }
  53  | 
  54  |   async selectBusinessByName(businessName) {
  55  |     const businessCard = this.page.locator(`text=${businessName}`).first();
  56  |     await businessCard.click();
  57  |   }
  58  | 
  59  |   async selectFirstAvailableBusiness() {
  60  |     const firstBusiness = this.page.locator('div[class*="rounded-2xl"][class*="cursor-pointer"], button[class*="rounded-2xl"]').first();
  61  |     await firstBusiness.waitFor({ state: 'visible' });
  62  |     await firstBusiness.click();
  63  |   }
  64  | 
  65  |   async selectServiceByName(serviceName) {
  66  |     const serviceOption = this.page.locator(`button:has-text("${serviceName}"), label:has-text("${serviceName}"), div:has-text("${serviceName}")`).first();
  67  |     await serviceOption.click();
  68  |   }
  69  | 
  70  |   async selectStaffByName(staffName) {
  71  |     const staffOption = this.page.locator(`button:has-text("${staffName}"), label:has-text("${staffName}"), div:has-text("${staffName}")`).first();
  72  |     await staffOption.click();
  73  |   }
  74  | 
  75  |   async openDatePicker() {
  76  |     await this.datePickerTrigger.click();
  77  |   }
  78  | 
  79  |   async selectDayInDatePicker(dayNumber) {
  80  |     await this.openDatePicker();
  81  |     const dayBtn = this.page.locator(`div.z-50 button:text-is("${dayNumber}"):not([disabled])`).first();
  82  |     await dayBtn.click();
  83  |   }
  84  | 
  85  |   async selectFirstAvailableSlot() {
  86  |     await expect(this.slotButtons.first()).toBeVisible({ timeout: 10000 });
  87  |     await this.slotButtons.first().click();
  88  |   }
  89  | 
  90  |   async selectSlotByTime(timeString) {
  91  |     const slot = this.slotButtons.filter({ hasText: timeString }).first();
  92  |     await slot.click();
  93  |   }
  94  | 
  95  |   async fillCustomerDetails({ name, email, phone, notes }) {
  96  |     if (name !== undefined) {
> 97  |       await this.nameInput.fill(name);
      |                            ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  98  |     }
  99  |     if (email !== undefined) {
  100 |       await this.emailInput.fill(email);
  101 |     }
  102 |     if (phone !== undefined) {
  103 |       await this.phoneInput.fill(phone);
  104 |     }
  105 |     if (notes !== undefined) {
  106 |       await this.notesInput.fill(notes);
  107 |     }
  108 |   }
  109 | 
  110 |   async submitBooking() {
  111 |     await this.confirmBookingBtn.click();
  112 |   }
  113 | 
  114 |   async completeBookingFlow(customerData) {
  115 |     await this.selectFirstAvailableSlot();
  116 |     await this.fillCustomerDetails(customerData);
  117 |     await this.submitBooking();
  118 |   }
  119 | 
  120 |   async expectBookingSuccess() {
  121 |     await expect(this.bookingSuccessCard).toBeVisible({ timeout: 10000 });
  122 |     await expect(this.bookAnotherBtn).toBeVisible();
  123 |   }
  124 | 
  125 |   async expectFieldError(errorMessage) {
  126 |     const errorLocator = this.page.locator(`p.text-red-600:has-text("${errorMessage}"), p.text-red-400:has-text("${errorMessage}")`).first();
  127 |     await expect(errorLocator).toBeVisible({ timeout: 10000 });
  128 |   }
  129 | }
  130 | 
  131 | module.exports = PublicBookingPage;
  132 | 
```