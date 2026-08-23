# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\smoke-public-booking.spec.js >> @smoke Public Customer Booking >> should successfully complete an end-to-end appointment booking
- Location: tests\smoke\smoke-public-booking.spec.js:20:3

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[placeholder*="Jane Doe" i], input[placeholder*="name" i]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
            - 'button "Agenda Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips: UTC USD" [ref=e24]':
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
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=e75]:
              - generic [ref=e76]: Salon <script>alert("XSS")</script>
              - generic [ref=e77]:
                - generic [ref=e78]: UTC
                - generic [ref=e79]: USD
            - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD" [ref=e80]:
              - generic [ref=e81]: Test Salon 0amdq1
              - paragraph [ref=e82]: Auto-generated test business description 0amdq1
              - generic [ref=e83]:
                - generic [ref=e84]: UTC
                - generic [ref=e85]: USD
            - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD" [ref=e86]:
              - generic [ref=e87]: Test Salon 0bcq40
              - paragraph [ref=e88]: Auto-generated test business description 0bcq40
              - generic [ref=e89]:
                - generic [ref=e90]: UTC
                - generic [ref=e91]: USD
            - button "Test Salon 0bg9rw Auto-generated test business description 0bg9rw UTC USD" [ref=e92]:
              - generic [ref=e93]: Test Salon 0bg9rw
              - paragraph [ref=e94]: Auto-generated test business description 0bg9rw
              - generic [ref=e95]:
                - generic [ref=e96]: UTC
                - generic [ref=e97]: USD
            - button "Test Salon 0dcs33 Auto-generated test business description 0dcs33 UTC USD" [ref=e98]:
              - generic [ref=e99]: Test Salon 0dcs33
              - paragraph [ref=e100]: Auto-generated test business description 0dcs33
              - generic [ref=e101]:
                - generic [ref=e102]: UTC
                - generic [ref=e103]: USD
            - button "Test Salon 0kklgx Auto-generated test business description 0kklgx UTC USD" [ref=e104]:
              - generic [ref=e105]: Test Salon 0kklgx
              - paragraph [ref=e106]: Auto-generated test business description 0kklgx
              - generic [ref=e107]:
                - generic [ref=e108]: UTC
                - generic [ref=e109]: USD
            - button "Test Salon 0rleyb Auto-generated test business description 0rleyb UTC USD" [ref=e110]:
              - generic [ref=e111]: Test Salon 0rleyb
              - paragraph [ref=e112]: Auto-generated test business description 0rleyb
              - generic [ref=e113]:
                - generic [ref=e114]: UTC
                - generic [ref=e115]: USD
            - button "Test Salon 0sewfj Auto-generated test business description 0sewfj UTC USD" [ref=e116]:
              - generic [ref=e117]: Test Salon 0sewfj
              - paragraph [ref=e118]: Auto-generated test business description 0sewfj
              - generic [ref=e119]:
                - generic [ref=e120]: UTC
                - generic [ref=e121]: USD
            - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD" [ref=e122]:
              - generic [ref=e123]: Test Salon 1bip1q
              - paragraph [ref=e124]: Auto-generated test business description 1bip1q
              - generic [ref=e125]:
                - generic [ref=e126]: UTC
                - generic [ref=e127]: USD
            - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD" [ref=e128]:
              - generic [ref=e129]: Test Salon 1gtheb
              - paragraph [ref=e130]: Auto-generated test business description 1gtheb
              - generic [ref=e131]:
                - generic [ref=e132]: UTC
                - generic [ref=e133]: USD
            - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD" [ref=e134]:
              - generic [ref=e135]: Test Salon 1hiobw
              - paragraph [ref=e136]: Auto-generated test business description 1hiobw
              - generic [ref=e137]:
                - generic [ref=e138]: UTC
                - generic [ref=e139]: USD
            - button "Test Salon 1tz8tl Auto-generated test business description 1tz8tl UTC USD" [ref=e140]:
              - generic [ref=e141]: Test Salon 1tz8tl
              - paragraph [ref=e142]: Auto-generated test business description 1tz8tl
              - generic [ref=e143]:
                - generic [ref=e144]: UTC
                - generic [ref=e145]: USD
            - button "Test Salon 2ondoq Auto-generated test business description 2ondoq UTC USD" [ref=e146]:
              - generic [ref=e147]: Test Salon 2ondoq
              - paragraph [ref=e148]: Auto-generated test business description 2ondoq
              - generic [ref=e149]:
                - generic [ref=e150]: UTC
                - generic [ref=e151]: USD
            - button "Test Salon 2vlcr5 Auto-generated test business description 2vlcr5 UTC USD" [ref=e152]:
              - generic [ref=e153]: Test Salon 2vlcr5
              - paragraph [ref=e154]: Auto-generated test business description 2vlcr5
              - generic [ref=e155]:
                - generic [ref=e156]: UTC
                - generic [ref=e157]: USD
            - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD" [ref=e158]:
              - generic [ref=e159]: Test Salon 35kobd
              - paragraph [ref=e160]: Auto-generated test business description 35kobd
              - generic [ref=e161]:
                - generic [ref=e162]: UTC
                - generic [ref=e163]: USD
            - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD" [ref=e164]:
              - generic [ref=e165]: Test Salon 3kcg5c
              - paragraph [ref=e166]: Auto-generated test business description 3kcg5c
              - generic [ref=e167]:
                - generic [ref=e168]: UTC
                - generic [ref=e169]: USD
            - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD" [ref=e170]:
              - generic [ref=e171]: Test Salon 4odkr7
              - paragraph [ref=e172]: Auto-generated test business description 4odkr7
              - generic [ref=e173]:
                - generic [ref=e174]: UTC
                - generic [ref=e175]: USD
            - button "Test Salon 4xohph Auto-generated test business description 4xohph UTC USD" [ref=e176]:
              - generic [ref=e177]: Test Salon 4xohph
              - paragraph [ref=e178]: Auto-generated test business description 4xohph
              - generic [ref=e179]:
                - generic [ref=e180]: UTC
                - generic [ref=e181]: USD
            - button "Test Salon 5ep3q6 Auto-generated test business description 5ep3q6 UTC USD" [ref=e182]:
              - generic [ref=e183]: Test Salon 5ep3q6
              - paragraph [ref=e184]: Auto-generated test business description 5ep3q6
              - generic [ref=e185]:
                - generic [ref=e186]: UTC
                - generic [ref=e187]: USD
            - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD" [ref=e188]:
              - generic [ref=e189]: Test Salon 5kpeld
              - paragraph [ref=e190]: Auto-generated test business description 5kpeld
              - generic [ref=e191]:
                - generic [ref=e192]: UTC
                - generic [ref=e193]: USD
            - button "Test Salon 68wan7 Auto-generated test business description 68wan7 UTC USD" [ref=e194]:
              - generic [ref=e195]: Test Salon 68wan7
              - paragraph [ref=e196]: Auto-generated test business description 68wan7
              - generic [ref=e197]:
                - generic [ref=e198]: UTC
                - generic [ref=e199]: USD
            - button "Test Salon 6ev8gh Auto-generated test business description 6ev8gh UTC USD" [ref=e200]:
              - generic [ref=e201]: Test Salon 6ev8gh
              - paragraph [ref=e202]: Auto-generated test business description 6ev8gh
              - generic [ref=e203]:
                - generic [ref=e204]: UTC
                - generic [ref=e205]: USD
            - button "Test Salon 6us1xu Auto-generated test business description 6us1xu UTC USD" [ref=e206]:
              - generic [ref=e207]: Test Salon 6us1xu
              - paragraph [ref=e208]: Auto-generated test business description 6us1xu
              - generic [ref=e209]:
                - generic [ref=e210]: UTC
                - generic [ref=e211]: USD
            - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD" [ref=e212]:
              - generic [ref=e213]: Test Salon 6xqwra
              - paragraph [ref=e214]: Auto-generated test business description 6xqwra
              - generic [ref=e215]:
                - generic [ref=e216]: UTC
                - generic [ref=e217]: USD
            - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD" [ref=e218]:
              - generic [ref=e219]: Test Salon 76cxtv
              - paragraph [ref=e220]: Auto-generated test business description 76cxtv
              - generic [ref=e221]:
                - generic [ref=e222]: UTC
                - generic [ref=e223]: USD
            - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD" [ref=e224]:
              - generic [ref=e225]: Test Salon 7bit9w
              - paragraph [ref=e226]: Auto-generated test business description 7bit9w
              - generic [ref=e227]:
                - generic [ref=e228]: UTC
                - generic [ref=e229]: USD
            - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD" [ref=e230]:
              - generic [ref=e231]: Test Salon 7nf9hv
              - paragraph [ref=e232]: Auto-generated test business description 7nf9hv
              - generic [ref=e233]:
                - generic [ref=e234]: UTC
                - generic [ref=e235]: USD
            - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD" [ref=e236]:
              - generic [ref=e237]: Test Salon 7o4pn7
              - paragraph [ref=e238]: Auto-generated test business description 7o4pn7
              - generic [ref=e239]:
                - generic [ref=e240]: UTC
                - generic [ref=e241]: USD
            - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD" [ref=e242]:
              - generic [ref=e243]: Test Salon 8h9i5t
              - paragraph [ref=e244]: Auto-generated test business description 8h9i5t
              - generic [ref=e245]:
                - generic [ref=e246]: UTC
                - generic [ref=e247]: USD
            - button "Test Salon 8ybunz Auto-generated test business description 8ybunz UTC USD" [ref=e248]:
              - generic [ref=e249]: Test Salon 8ybunz
              - paragraph [ref=e250]: Auto-generated test business description 8ybunz
              - generic [ref=e251]:
                - generic [ref=e252]: UTC
                - generic [ref=e253]: USD
            - button "Test Salon 9y7j6v Auto-generated test business description 9y7j6v UTC USD" [ref=e254]:
              - generic [ref=e255]: Test Salon 9y7j6v
              - paragraph [ref=e256]: Auto-generated test business description 9y7j6v
              - generic [ref=e257]:
                - generic [ref=e258]: UTC
                - generic [ref=e259]: USD
            - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD" [ref=e260]:
              - generic [ref=e261]: Test Salon a68qlk
              - paragraph [ref=e262]: Auto-generated test business description a68qlk
              - generic [ref=e263]:
                - generic [ref=e264]: UTC
                - generic [ref=e265]: USD
            - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD" [ref=e266]:
              - generic [ref=e267]: Test Salon asymmy
              - paragraph [ref=e268]: Auto-generated test business description asymmy
              - generic [ref=e269]:
                - generic [ref=e270]: UTC
                - generic [ref=e271]: USD
            - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD" [ref=e272]:
              - generic [ref=e273]: Test Salon atz1m3
              - paragraph [ref=e274]: Auto-generated test business description atz1m3
              - generic [ref=e275]:
                - generic [ref=e276]: UTC
                - generic [ref=e277]: USD
            - button "Test Salon b2od8p Auto-generated test business description b2od8p UTC USD" [ref=e278]:
              - generic [ref=e279]: Test Salon b2od8p
              - paragraph [ref=e280]: Auto-generated test business description b2od8p
              - generic [ref=e281]:
                - generic [ref=e282]: UTC
                - generic [ref=e283]: USD
            - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD" [ref=e284]:
              - generic [ref=e285]: Test Salon b76urd
              - paragraph [ref=e286]: Auto-generated test business description b76urd
              - generic [ref=e287]:
                - generic [ref=e288]: UTC
                - generic [ref=e289]: USD
            - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD" [ref=e290]:
              - generic [ref=e291]: Test Salon btnwca
              - paragraph [ref=e292]: Auto-generated test business description btnwca
              - generic [ref=e293]:
                - generic [ref=e294]: UTC
                - generic [ref=e295]: USD
            - button "Test Salon buvlm6 Auto-generated test business description buvlm6 UTC USD" [ref=e296]:
              - generic [ref=e297]: Test Salon buvlm6
              - paragraph [ref=e298]: Auto-generated test business description buvlm6
              - generic [ref=e299]:
                - generic [ref=e300]: UTC
                - generic [ref=e301]: USD
            - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD" [ref=e302]:
              - generic [ref=e303]: Test Salon c0uqdl
              - paragraph [ref=e304]: Auto-generated test business description c0uqdl
              - generic [ref=e305]:
                - generic [ref=e306]: UTC
                - generic [ref=e307]: USD
            - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD" [ref=e308]:
              - generic [ref=e309]: Test Salon cemiq4
              - paragraph [ref=e310]: Auto-generated test business description cemiq4
              - generic [ref=e311]:
                - generic [ref=e312]: UTC
                - generic [ref=e313]: USD
            - button "Test Salon cktfm5 Auto-generated test business description cktfm5 UTC USD" [ref=e314]:
              - generic [ref=e315]: Test Salon cktfm5
              - paragraph [ref=e316]: Auto-generated test business description cktfm5
              - generic [ref=e317]:
                - generic [ref=e318]: UTC
                - generic [ref=e319]: USD
            - button "Test Salon cr33gn Auto-generated test business description cr33gn UTC USD" [ref=e320]:
              - generic [ref=e321]: Test Salon cr33gn
              - paragraph [ref=e322]: Auto-generated test business description cr33gn
              - generic [ref=e323]:
                - generic [ref=e324]: UTC
                - generic [ref=e325]: USD
            - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD" [ref=e326]:
              - generic [ref=e327]: Test Salon cs0sk6
              - paragraph [ref=e328]: Auto-generated test business description cs0sk6
              - generic [ref=e329]:
                - generic [ref=e330]: UTC
                - generic [ref=e331]: USD
            - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD" [ref=e332]:
              - generic [ref=e333]: Test Salon d2s8sx
              - paragraph [ref=e334]: Auto-generated test business description d2s8sx
              - generic [ref=e335]:
                - generic [ref=e336]: UTC
                - generic [ref=e337]: USD
            - button "Test Salon dho34a UTC USD" [ref=e338]:
              - generic [ref=e339]: Test Salon dho34a
              - generic [ref=e340]:
                - generic [ref=e341]: UTC
                - generic [ref=e342]: USD
            - button "Test Salon dzf6ja Auto-generated test business description dzf6ja UTC USD" [ref=e343]:
              - generic [ref=e344]: Test Salon dzf6ja
              - paragraph [ref=e345]: Auto-generated test business description dzf6ja
              - generic [ref=e346]:
                - generic [ref=e347]: UTC
                - generic [ref=e348]: USD
            - button "Test Salon e2cvo6 Auto-generated test business description e2cvo6 UTC USD" [ref=e349]:
              - generic [ref=e350]: Test Salon e2cvo6
              - paragraph [ref=e351]: Auto-generated test business description e2cvo6
              - generic [ref=e352]:
                - generic [ref=e353]: UTC
                - generic [ref=e354]: USD
            - button "Test Salon e6ccjp Auto-generated test business description e6ccjp UTC USD" [ref=e355]:
              - generic [ref=e356]: Test Salon e6ccjp
              - paragraph [ref=e357]: Auto-generated test business description e6ccjp
              - generic [ref=e358]:
                - generic [ref=e359]: UTC
                - generic [ref=e360]: USD
            - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD" [ref=e361]:
              - generic [ref=e362]: Test Salon egni33
              - paragraph [ref=e363]: Auto-generated test business description egni33
              - generic [ref=e364]:
                - generic [ref=e365]: UTC
                - generic [ref=e366]: USD
            - button "Test Salon eog81f Auto-generated test business description eog81f UTC USD" [ref=e367]:
              - generic [ref=e368]: Test Salon eog81f
              - paragraph [ref=e369]: Auto-generated test business description eog81f
              - generic [ref=e370]:
                - generic [ref=e371]: UTC
                - generic [ref=e372]: USD
            - button "Test Salon esyzer Auto-generated test business description esyzer UTC USD" [ref=e373]:
              - generic [ref=e374]: Test Salon esyzer
              - paragraph [ref=e375]: Auto-generated test business description esyzer
              - generic [ref=e376]:
                - generic [ref=e377]: UTC
                - generic [ref=e378]: USD
            - button "Test Salon f39zeb Auto-generated test business description f39zeb UTC USD" [ref=e379]:
              - generic [ref=e380]: Test Salon f39zeb
              - paragraph [ref=e381]: Auto-generated test business description f39zeb
              - generic [ref=e382]:
                - generic [ref=e383]: UTC
                - generic [ref=e384]: USD
            - button "Test Salon f66hvn Auto-generated test business description f66hvn UTC USD" [ref=e385]:
              - generic [ref=e386]: Test Salon f66hvn
              - paragraph [ref=e387]: Auto-generated test business description f66hvn
              - generic [ref=e388]:
                - generic [ref=e389]: UTC
                - generic [ref=e390]: USD
            - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD" [ref=e391]:
              - generic [ref=e392]: Test Salon fnk1tt
              - paragraph [ref=e393]: Auto-generated test business description fnk1tt
              - generic [ref=e394]:
                - generic [ref=e395]: UTC
                - generic [ref=e396]: USD
            - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD" [ref=e397]:
              - generic [ref=e398]: Test Salon fwgmjd
              - paragraph [ref=e399]: Auto-generated test business description fwgmjd
              - generic [ref=e400]:
                - generic [ref=e401]: UTC
                - generic [ref=e402]: USD
            - button "Test Salon g4v7yp Auto-generated test business description g4v7yp UTC USD" [ref=e403]:
              - generic [ref=e404]: Test Salon g4v7yp
              - paragraph [ref=e405]: Auto-generated test business description g4v7yp
              - generic [ref=e406]:
                - generic [ref=e407]: UTC
                - generic [ref=e408]: USD
            - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD" [ref=e409]:
              - generic [ref=e410]: Test Salon gi47ns
              - paragraph [ref=e411]: Auto-generated test business description gi47ns
              - generic [ref=e412]:
                - generic [ref=e413]: UTC
                - generic [ref=e414]: USD
            - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD" [ref=e415]:
              - generic [ref=e416]: Test Salon gl6fqe
              - paragraph [ref=e417]: Auto-generated test business description gl6fqe
              - generic [ref=e418]:
                - generic [ref=e419]: UTC
                - generic [ref=e420]: USD
            - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD" [ref=e421]:
              - generic [ref=e422]: Test Salon gl7ea7
              - paragraph [ref=e423]: Auto-generated test business description gl7ea7
              - generic [ref=e424]:
                - generic [ref=e425]: UTC
                - generic [ref=e426]: USD
            - button "Test Salon hsr5y2 Auto-generated test business description hsr5y2 UTC USD" [ref=e427]:
              - generic [ref=e428]: Test Salon hsr5y2
              - paragraph [ref=e429]: Auto-generated test business description hsr5y2
              - generic [ref=e430]:
                - generic [ref=e431]: UTC
                - generic [ref=e432]: USD
            - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD" [ref=e433]:
              - generic [ref=e434]: Test Salon hxzb30
              - paragraph [ref=e435]: Auto-generated test business description hxzb30
              - generic [ref=e436]:
                - generic [ref=e437]: UTC
                - generic [ref=e438]: USD
            - button "Test Salon hywbat Auto-generated test business description hywbat UTC USD" [ref=e439]:
              - generic [ref=e440]: Test Salon hywbat
              - paragraph [ref=e441]: Auto-generated test business description hywbat
              - generic [ref=e442]:
                - generic [ref=e443]: UTC
                - generic [ref=e444]: USD
            - button "Test Salon i09pa0 Auto-generated test business description i09pa0 UTC USD" [ref=e445]:
              - generic [ref=e446]: Test Salon i09pa0
              - paragraph [ref=e447]: Auto-generated test business description i09pa0
              - generic [ref=e448]:
                - generic [ref=e449]: UTC
                - generic [ref=e450]: USD
            - button "Test Salon i2ygf8 Auto-generated test business description i2ygf8 UTC USD" [ref=e451]:
              - generic [ref=e452]: Test Salon i2ygf8
              - paragraph [ref=e453]: Auto-generated test business description i2ygf8
              - generic [ref=e454]:
                - generic [ref=e455]: UTC
                - generic [ref=e456]: USD
            - button "Test Salon igp24q Auto-generated test business description igp24q UTC USD" [ref=e457]:
              - generic [ref=e458]: Test Salon igp24q
              - paragraph [ref=e459]: Auto-generated test business description igp24q
              - generic [ref=e460]:
                - generic [ref=e461]: UTC
                - generic [ref=e462]: USD
            - button "Test Salon io5wbl Auto-generated test business description io5wbl UTC USD" [ref=e463]:
              - generic [ref=e464]: Test Salon io5wbl
              - paragraph [ref=e465]: Auto-generated test business description io5wbl
              - generic [ref=e466]:
                - generic [ref=e467]: UTC
                - generic [ref=e468]: USD
            - button "Test Salon iq4yfy Auto-generated test business description iq4yfy UTC USD" [ref=e469]:
              - generic [ref=e470]: Test Salon iq4yfy
              - paragraph [ref=e471]: Auto-generated test business description iq4yfy
              - generic [ref=e472]:
                - generic [ref=e473]: UTC
                - generic [ref=e474]: USD
            - button "Test Salon izlip1 Auto-generated test business description izlip1 UTC USD" [ref=e475]:
              - generic [ref=e476]: Test Salon izlip1
              - paragraph [ref=e477]: Auto-generated test business description izlip1
              - generic [ref=e478]:
                - generic [ref=e479]: UTC
                - generic [ref=e480]: USD
            - button "Test Salon j9kwz5 Auto-generated test business description j9kwz5 UTC USD" [ref=e481]:
              - generic [ref=e482]: Test Salon j9kwz5
              - paragraph [ref=e483]: Auto-generated test business description j9kwz5
              - generic [ref=e484]:
                - generic [ref=e485]: UTC
                - generic [ref=e486]: USD
            - button "Test Salon jyc5f4 Auto-generated test business description jyc5f4 UTC USD" [ref=e487]:
              - generic [ref=e488]: Test Salon jyc5f4
              - paragraph [ref=e489]: Auto-generated test business description jyc5f4
              - generic [ref=e490]:
                - generic [ref=e491]: UTC
                - generic [ref=e492]: USD
            - button "Test Salon kaw4su Auto-generated test business description kaw4su UTC USD" [ref=e493]:
              - generic [ref=e494]: Test Salon kaw4su
              - paragraph [ref=e495]: Auto-generated test business description kaw4su
              - generic [ref=e496]:
                - generic [ref=e497]: UTC
                - generic [ref=e498]: USD
            - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD" [ref=e499]:
              - generic [ref=e500]: Test Salon ls8uew
              - paragraph [ref=e501]: Auto-generated test business description ls8uew
              - generic [ref=e502]:
                - generic [ref=e503]: UTC
                - generic [ref=e504]: USD
            - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD" [ref=e505]:
              - generic [ref=e506]: Test Salon lxdrvs
              - paragraph [ref=e507]: Auto-generated test business description lxdrvs
              - generic [ref=e508]:
                - generic [ref=e509]: UTC
                - generic [ref=e510]: USD
            - button "Test Salon mmwtfq Auto-generated test business description mmwtfq UTC USD" [ref=e511]:
              - generic [ref=e512]: Test Salon mmwtfq
              - paragraph [ref=e513]: Auto-generated test business description mmwtfq
              - generic [ref=e514]:
                - generic [ref=e515]: UTC
                - generic [ref=e516]: USD
            - button "Test Salon ndj6b4 Auto-generated test business description ndj6b4 UTC USD" [ref=e517]:
              - generic [ref=e518]: Test Salon ndj6b4
              - paragraph [ref=e519]: Auto-generated test business description ndj6b4
              - generic [ref=e520]:
                - generic [ref=e521]: UTC
                - generic [ref=e522]: USD
            - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD" [ref=e523]:
              - generic [ref=e524]: Test Salon niqqre
              - paragraph [ref=e525]: Auto-generated test business description niqqre
              - generic [ref=e526]:
                - generic [ref=e527]: UTC
                - generic [ref=e528]: USD
            - button "Test Salon njflen Auto-generated test business description njflen UTC USD" [ref=e529]:
              - generic [ref=e530]: Test Salon njflen
              - paragraph [ref=e531]: Auto-generated test business description njflen
              - generic [ref=e532]:
                - generic [ref=e533]: UTC
                - generic [ref=e534]: USD
            - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD" [ref=e535]:
              - generic [ref=e536]: Test Salon nnnmtw
              - paragraph [ref=e537]: Auto-generated test business description nnnmtw
              - generic [ref=e538]:
                - generic [ref=e539]: UTC
                - generic [ref=e540]: USD
            - button "Test Salon nrc7yx Auto-generated test business description nrc7yx UTC USD" [ref=e541]:
              - generic [ref=e542]: Test Salon nrc7yx
              - paragraph [ref=e543]: Auto-generated test business description nrc7yx
              - generic [ref=e544]:
                - generic [ref=e545]: UTC
                - generic [ref=e546]: USD
            - button "Test Salon ntu9yq Auto-generated test business description ntu9yq UTC USD" [ref=e547]:
              - generic [ref=e548]: Test Salon ntu9yq
              - paragraph [ref=e549]: Auto-generated test business description ntu9yq
              - generic [ref=e550]:
                - generic [ref=e551]: UTC
                - generic [ref=e552]: USD
            - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD" [ref=e553]:
              - generic [ref=e554]: Test Salon oeux2s
              - paragraph [ref=e555]: Auto-generated test business description oeux2s
              - generic [ref=e556]:
                - generic [ref=e557]: UTC
                - generic [ref=e558]: USD
            - button "Test Salon ofw1px Auto-generated test business description ofw1px UTC USD" [ref=e559]:
              - generic [ref=e560]: Test Salon ofw1px
              - paragraph [ref=e561]: Auto-generated test business description ofw1px
              - generic [ref=e562]:
                - generic [ref=e563]: UTC
                - generic [ref=e564]: USD
            - button "Test Salon oqmwe8 UTC USD" [ref=e565]:
              - generic [ref=e566]: Test Salon oqmwe8
              - generic [ref=e567]:
                - generic [ref=e568]: UTC
                - generic [ref=e569]: USD
            - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD" [ref=e570]:
              - generic [ref=e571]: Test Salon orw3o4
              - paragraph [ref=e572]: Auto-generated test business description orw3o4
              - generic [ref=e573]:
                - generic [ref=e574]: UTC
                - generic [ref=e575]: USD
            - button "Test Salon ox1a1r Auto-generated test business description ox1a1r UTC USD" [ref=e576]:
              - generic [ref=e577]: Test Salon ox1a1r
              - paragraph [ref=e578]: Auto-generated test business description ox1a1r
              - generic [ref=e579]:
                - generic [ref=e580]: UTC
                - generic [ref=e581]: USD
            - button "Test Salon p1hgbn Auto-generated test business description p1hgbn UTC USD" [ref=e582]:
              - generic [ref=e583]: Test Salon p1hgbn
              - paragraph [ref=e584]: Auto-generated test business description p1hgbn
              - generic [ref=e585]:
                - generic [ref=e586]: UTC
                - generic [ref=e587]: USD
            - button "Test Salon p27b4v Auto-generated test business description p27b4v UTC USD" [ref=e588]:
              - generic [ref=e589]: Test Salon p27b4v
              - paragraph [ref=e590]: Auto-generated test business description p27b4v
              - generic [ref=e591]:
                - generic [ref=e592]: UTC
                - generic [ref=e593]: USD
            - button "Test Salon p51md7 Auto-generated test business description p51md7 UTC USD" [ref=e594]:
              - generic [ref=e595]: Test Salon p51md7
              - paragraph [ref=e596]: Auto-generated test business description p51md7
              - generic [ref=e597]:
                - generic [ref=e598]: UTC
                - generic [ref=e599]: USD
            - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD" [ref=e600]:
              - generic [ref=e601]: Test Salon pyoepe
              - paragraph [ref=e602]: Auto-generated test business description pyoepe
              - generic [ref=e603]:
                - generic [ref=e604]: UTC
                - generic [ref=e605]: USD
            - button "Test Salon q65mxa Auto-generated test business description q65mxa UTC USD" [ref=e606]:
              - generic [ref=e607]: Test Salon q65mxa
              - paragraph [ref=e608]: Auto-generated test business description q65mxa
              - generic [ref=e609]:
                - generic [ref=e610]: UTC
                - generic [ref=e611]: USD
            - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD" [ref=e612]:
              - generic [ref=e613]: Test Salon qcm18x
              - paragraph [ref=e614]: Auto-generated test business description qcm18x
              - generic [ref=e615]:
                - generic [ref=e616]: UTC
                - generic [ref=e617]: USD
            - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD" [ref=e618]:
              - generic [ref=e619]: Test Salon qlbret
              - paragraph [ref=e620]: Auto-generated test business description qlbret
              - generic [ref=e621]:
                - generic [ref=e622]: UTC
                - generic [ref=e623]: USD
            - button "Test Salon qlz60s Auto-generated test business description qlz60s UTC USD" [ref=e624]:
              - generic [ref=e625]: Test Salon qlz60s
              - paragraph [ref=e626]: Auto-generated test business description qlz60s
              - generic [ref=e627]:
                - generic [ref=e628]: UTC
                - generic [ref=e629]: USD
            - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD" [ref=e630]:
              - generic [ref=e631]: Test Salon qr0hfk
              - paragraph [ref=e632]: Auto-generated test business description qr0hfk
              - generic [ref=e633]:
                - generic [ref=e634]: UTC
                - generic [ref=e635]: USD
            - button "Test Salon qzedc4 Auto-generated test business description qzedc4 UTC USD" [ref=e636]:
              - generic [ref=e637]: Test Salon qzedc4
              - paragraph [ref=e638]: Auto-generated test business description qzedc4
              - generic [ref=e639]:
                - generic [ref=e640]: UTC
                - generic [ref=e641]: USD
            - button "Test Salon r3vudz Auto-generated test business description r3vudz UTC USD" [ref=e642]:
              - generic [ref=e643]: Test Salon r3vudz
              - paragraph [ref=e644]: Auto-generated test business description r3vudz
              - generic [ref=e645]:
                - generic [ref=e646]: UTC
                - generic [ref=e647]: USD
            - button "Test Salon r82npz Auto-generated test business description r82npz UTC USD" [ref=e648]:
              - generic [ref=e649]: Test Salon r82npz
              - paragraph [ref=e650]: Auto-generated test business description r82npz
              - generic [ref=e651]:
                - generic [ref=e652]: UTC
                - generic [ref=e653]: USD
            - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD" [ref=e654]:
              - generic [ref=e655]: Test Salon r9cxkb
              - paragraph [ref=e656]: Auto-generated test business description r9cxkb
              - generic [ref=e657]:
                - generic [ref=e658]: UTC
                - generic [ref=e659]: USD
            - button "Test Salon rf1l22 Auto-generated test business description rf1l22 UTC USD" [ref=e660]:
              - generic [ref=e661]: Test Salon rf1l22
              - paragraph [ref=e662]: Auto-generated test business description rf1l22
              - generic [ref=e663]:
                - generic [ref=e664]: UTC
                - generic [ref=e665]: USD
            - button "Test Salon rolg7h Auto-generated test business description rolg7h UTC USD" [ref=e666]:
              - generic [ref=e667]: Test Salon rolg7h
              - paragraph [ref=e668]: Auto-generated test business description rolg7h
              - generic [ref=e669]:
                - generic [ref=e670]: UTC
                - generic [ref=e671]: USD
            - button "Test Salon s4buzl Auto-generated test business description s4buzl UTC USD" [ref=e672]:
              - generic [ref=e673]: Test Salon s4buzl
              - paragraph [ref=e674]: Auto-generated test business description s4buzl
              - generic [ref=e675]:
                - generic [ref=e676]: UTC
                - generic [ref=e677]: USD
            - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD" [ref=e678]:
              - generic [ref=e679]: Test Salon s7a7st
              - paragraph [ref=e680]: Auto-generated test business description s7a7st
              - generic [ref=e681]:
                - generic [ref=e682]: UTC
                - generic [ref=e683]: USD
            - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD" [ref=e684]:
              - generic [ref=e685]: Test Salon sky7cf
              - paragraph [ref=e686]: Auto-generated test business description sky7cf
              - generic [ref=e687]:
                - generic [ref=e688]: UTC
                - generic [ref=e689]: USD
            - button "Test Salon sqybcz Auto-generated test business description sqybcz UTC USD" [ref=e690]:
              - generic [ref=e691]: Test Salon sqybcz
              - paragraph [ref=e692]: Auto-generated test business description sqybcz
              - generic [ref=e693]:
                - generic [ref=e694]: UTC
                - generic [ref=e695]: USD
            - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD" [ref=e696]:
              - generic [ref=e697]: Test Salon t9wjh7
              - paragraph [ref=e698]: Auto-generated test business description t9wjh7
              - generic [ref=e699]:
                - generic [ref=e700]: UTC
                - generic [ref=e701]: USD
            - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD" [ref=e702]:
              - generic [ref=e703]: Test Salon ta5ce7
              - paragraph [ref=e704]: Auto-generated test business description ta5ce7
              - generic [ref=e705]:
                - generic [ref=e706]: UTC
                - generic [ref=e707]: USD
            - button "Test Salon tofgo7 Auto-generated test business description tofgo7 UTC USD" [ref=e708]:
              - generic [ref=e709]: Test Salon tofgo7
              - paragraph [ref=e710]: Auto-generated test business description tofgo7
              - generic [ref=e711]:
                - generic [ref=e712]: UTC
                - generic [ref=e713]: USD
            - button "Test Salon trubva Auto-generated test business description trubva UTC USD" [ref=e714]:
              - generic [ref=e715]: Test Salon trubva
              - paragraph [ref=e716]: Auto-generated test business description trubva
              - generic [ref=e717]:
                - generic [ref=e718]: UTC
                - generic [ref=e719]: USD
            - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD" [ref=e720]:
              - generic [ref=e721]: Test Salon u0g7lb
              - paragraph [ref=e722]: Auto-generated test business description u0g7lb
              - generic [ref=e723]:
                - generic [ref=e724]: UTC
                - generic [ref=e725]: USD
            - button "Test Salon u466xi Auto-generated test business description u466xi UTC USD" [ref=e726]:
              - generic [ref=e727]: Test Salon u466xi
              - paragraph [ref=e728]: Auto-generated test business description u466xi
              - generic [ref=e729]:
                - generic [ref=e730]: UTC
                - generic [ref=e731]: USD
            - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD" [ref=e732]:
              - generic [ref=e733]: Test Salon u8pzhc
              - paragraph [ref=e734]: Auto-generated test business description u8pzhc
              - generic [ref=e735]:
                - generic [ref=e736]: UTC
                - generic [ref=e737]: USD
            - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD" [ref=e738]:
              - generic [ref=e739]: Test Salon ub3aeu
              - paragraph [ref=e740]: Auto-generated test business description ub3aeu
              - generic [ref=e741]:
                - generic [ref=e742]: UTC
                - generic [ref=e743]: USD
            - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD" [ref=e744]:
              - generic [ref=e745]: Test Salon ui869c
              - paragraph [ref=e746]: Auto-generated test business description ui869c
              - generic [ref=e747]:
                - generic [ref=e748]: UTC
                - generic [ref=e749]: USD
            - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD" [ref=e750]:
              - generic [ref=e751]: Test Salon vamdvm
              - paragraph [ref=e752]: Auto-generated test business description vamdvm
              - generic [ref=e753]:
                - generic [ref=e754]: UTC
                - generic [ref=e755]: USD
            - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD" [ref=e756]:
              - generic [ref=e757]: Test Salon vsxf4h
              - paragraph [ref=e758]: Auto-generated test business description vsxf4h
              - generic [ref=e759]:
                - generic [ref=e760]: UTC
                - generic [ref=e761]: USD
            - button "Test Salon vyvnvm Auto-generated test business description vyvnvm UTC USD" [ref=e762]:
              - generic [ref=e763]: Test Salon vyvnvm
              - paragraph [ref=e764]: Auto-generated test business description vyvnvm
              - generic [ref=e765]:
                - generic [ref=e766]: UTC
                - generic [ref=e767]: USD
            - button "Test Salon w9pymy Auto-generated test business description w9pymy UTC USD" [ref=e768]:
              - generic [ref=e769]: Test Salon w9pymy
              - paragraph [ref=e770]: Auto-generated test business description w9pymy
              - generic [ref=e771]:
                - generic [ref=e772]: UTC
                - generic [ref=e773]: USD
            - button "Test Salon wnb5i6 Auto-generated test business description wnb5i6 UTC USD" [ref=e774]:
              - generic [ref=e775]: Test Salon wnb5i6
              - paragraph [ref=e776]: Auto-generated test business description wnb5i6
              - generic [ref=e777]:
                - generic [ref=e778]: UTC
                - generic [ref=e779]: USD
            - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD" [ref=e780]:
              - generic [ref=e781]: Test Salon wpsv41
              - paragraph [ref=e782]: Auto-generated test business description wpsv41
              - generic [ref=e783]:
                - generic [ref=e784]: UTC
                - generic [ref=e785]: USD
            - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD" [ref=e786]:
              - generic [ref=e787]: Test Salon wqwz95
              - paragraph [ref=e788]: Auto-generated test business description wqwz95
              - generic [ref=e789]:
                - generic [ref=e790]: UTC
                - generic [ref=e791]: USD
            - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD" [ref=e792]:
              - generic [ref=e793]: Test Salon x4gtj1
              - paragraph [ref=e794]: Auto-generated test business description x4gtj1
              - generic [ref=e795]:
                - generic [ref=e796]: UTC
                - generic [ref=e797]: USD
            - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD" [ref=e798]:
              - generic [ref=e799]: Test Salon x9lli8
              - paragraph [ref=e800]: Auto-generated test business description x9lli8
              - generic [ref=e801]:
                - generic [ref=e802]: UTC
                - generic [ref=e803]: USD
            - button "Test Salon xoymd5 Auto-generated test business description xoymd5 UTC USD" [ref=e804]:
              - generic [ref=e805]: Test Salon xoymd5
              - paragraph [ref=e806]: Auto-generated test business description xoymd5
              - generic [ref=e807]:
                - generic [ref=e808]: UTC
                - generic [ref=e809]: USD
            - button "Test Salon xvqmlv UTC USD" [ref=e810]:
              - generic [ref=e811]: Test Salon xvqmlv
              - generic [ref=e812]:
                - generic [ref=e813]: UTC
                - generic [ref=e814]: USD
            - button "Test Salon y195if Auto-generated test business description y195if UTC USD" [ref=e815]:
              - generic [ref=e816]: Test Salon y195if
              - paragraph [ref=e817]: Auto-generated test business description y195if
              - generic [ref=e818]:
                - generic [ref=e819]: UTC
                - generic [ref=e820]: USD
            - button "Test Salon y1a00e Auto-generated test business description y1a00e UTC USD" [ref=e821]:
              - generic [ref=e822]: Test Salon y1a00e
              - paragraph [ref=e823]: Auto-generated test business description y1a00e
              - generic [ref=e824]:
                - generic [ref=e825]: UTC
                - generic [ref=e826]: USD
            - button "Test Salon yrlmqy Auto-generated test business description yrlmqy UTC USD" [ref=e827]:
              - generic [ref=e828]: Test Salon yrlmqy
              - paragraph [ref=e829]: Auto-generated test business description yrlmqy
              - generic [ref=e830]:
                - generic [ref=e831]: UTC
                - generic [ref=e832]: USD
            - button "Test Salon z5y8m6 Auto-generated test business description z5y8m6 UTC USD" [ref=e833]:
              - generic [ref=e834]: Test Salon z5y8m6
              - paragraph [ref=e835]: Auto-generated test business description z5y8m6
              - generic [ref=e836]:
                - generic [ref=e837]: UTC
                - generic [ref=e838]: USD
            - button "Test Salon zh7z25 Auto-generated test business description zh7z25 UTC USD" [ref=e839]:
              - generic [ref=e840]: Test Salon zh7z25
              - paragraph [ref=e841]: Auto-generated test business description zh7z25
              - generic [ref=e842]:
                - generic [ref=e843]: UTC
                - generic [ref=e844]: USD
            - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD" [ref=e845]:
              - generic [ref=e846]: Test Salon ztn2hy
              - paragraph [ref=e847]: Auto-generated test business description ztn2hy
              - generic [ref=e848]:
                - generic [ref=e849]: UTC
                - generic [ref=e850]: USD
            - button "Zen Spa UTC USD" [ref=e851]:
              - generic [ref=e852]: Zen Spa
              - generic [ref=e853]:
                - generic [ref=e854]: UTC
                - generic [ref=e855]: USD
            - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD" [ref=e856]:
              - generic [ref=e857]: chingcho
              - paragraph [ref=e858]: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
              - generic [ref=e859]:
                - generic [ref=e860]: UTC
                - generic [ref=e861]: USD
        - generic [ref=e862]:
          - generic [ref=e863]:
            - heading "Agenda" [level=3] [ref=e864]
            - paragraph [ref=e865]: No address listed · No phone
          - separator [ref=e866]
          - generic [ref=e867]:
            - heading "2. Select Service" [level=4] [ref=e868]
            - button "Standard Appointment 50.00 USD General appointment service ⏱️ 30 mins" [ref=e870]:
              - generic [ref=e871]:
                - generic [ref=e872]: Standard Appointment
                - generic [ref=e873]: 50.00 USD
              - paragraph [ref=e874]: General appointment service
              - generic [ref=e875]: ⏱️ 30 mins
          - generic [ref=e876]:
            - generic [ref=e877]:
              - generic [ref=e878]: Select Date
              - button "📅 Sun, Aug 23, 2026 ▼" [ref=e880] [cursor=pointer]:
                - generic [ref=e881]:
                  - generic [ref=e882]: 📅
                  - generic [ref=e883]: Sun, Aug 23, 2026
                - generic [ref=e884]: ▼
            - generic [ref=e885]:
              - generic [ref=e886]: Preferred Staff (Optional)
              - combobox [ref=e887]:
                - option "Any available staff member" [selected]
                - option "Primary Specialist"
          - generic [ref=e888]:
            - generic [ref=e890]:
              - heading "3. Available Slots" [level=4] [ref=e891]
              - generic [ref=e892]: All times shown in business timezone (UTC)
            - paragraph [ref=e893]: No slots available for this date/service.
    - contentinfo [ref=e894]:
      - generic [ref=e895]:
        - generic [ref=e896]:
          - generic [ref=e897]: "Y"
          - generic [ref=e898]: Yarivo Appointments
          - generic [ref=e899]: ·
          - generic [ref=e900]: yarivo.com
        - generic [ref=e901]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=e907] [cursor=pointer]
  - alert [ref=e913]
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