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
            - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD" [ref=e65]:
              - generic [ref=e66]: Test Salon 0amdq1
              - paragraph [ref=e67]: Auto-generated test business description 0amdq1
              - generic [ref=e68]:
                - generic [ref=e69]: UTC
                - generic [ref=e70]: USD
            - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD" [ref=e71]:
              - generic [ref=e72]: Test Salon 0bcq40
              - paragraph [ref=e73]: Auto-generated test business description 0bcq40
              - generic [ref=e74]:
                - generic [ref=e75]: UTC
                - generic [ref=e76]: USD
            - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD" [ref=e77]:
              - generic [ref=e78]: Test Salon 1bip1q
              - paragraph [ref=e79]: Auto-generated test business description 1bip1q
              - generic [ref=e80]:
                - generic [ref=e81]: UTC
                - generic [ref=e82]: USD
            - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD" [ref=e83]:
              - generic [ref=e84]: Test Salon 1gtheb
              - paragraph [ref=e85]: Auto-generated test business description 1gtheb
              - generic [ref=e86]:
                - generic [ref=e87]: UTC
                - generic [ref=e88]: USD
            - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD" [ref=e89]:
              - generic [ref=e90]: Test Salon 1hiobw
              - paragraph [ref=e91]: Auto-generated test business description 1hiobw
              - generic [ref=e92]:
                - generic [ref=e93]: UTC
                - generic [ref=e94]: USD
            - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD" [ref=e95]:
              - generic [ref=e96]: Test Salon 35kobd
              - paragraph [ref=e97]: Auto-generated test business description 35kobd
              - generic [ref=e98]:
                - generic [ref=e99]: UTC
                - generic [ref=e100]: USD
            - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD" [ref=e101]:
              - generic [ref=e102]: Test Salon 3kcg5c
              - paragraph [ref=e103]: Auto-generated test business description 3kcg5c
              - generic [ref=e104]:
                - generic [ref=e105]: UTC
                - generic [ref=e106]: USD
            - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD" [ref=e107]:
              - generic [ref=e108]: Test Salon 4odkr7
              - paragraph [ref=e109]: Auto-generated test business description 4odkr7
              - generic [ref=e110]:
                - generic [ref=e111]: UTC
                - generic [ref=e112]: USD
            - button "Test Salon 4xohph Auto-generated test business description 4xohph UTC USD" [ref=e113]:
              - generic [ref=e114]: Test Salon 4xohph
              - paragraph [ref=e115]: Auto-generated test business description 4xohph
              - generic [ref=e116]:
                - generic [ref=e117]: UTC
                - generic [ref=e118]: USD
            - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD" [ref=e119]:
              - generic [ref=e120]: Test Salon 5kpeld
              - paragraph [ref=e121]: Auto-generated test business description 5kpeld
              - generic [ref=e122]:
                - generic [ref=e123]: UTC
                - generic [ref=e124]: USD
            - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD" [ref=e125]:
              - generic [ref=e126]: Test Salon 6xqwra
              - paragraph [ref=e127]: Auto-generated test business description 6xqwra
              - generic [ref=e128]:
                - generic [ref=e129]: UTC
                - generic [ref=e130]: USD
            - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD" [ref=e131]:
              - generic [ref=e132]: Test Salon 76cxtv
              - paragraph [ref=e133]: Auto-generated test business description 76cxtv
              - generic [ref=e134]:
                - generic [ref=e135]: UTC
                - generic [ref=e136]: USD
            - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD" [ref=e137]:
              - generic [ref=e138]: Test Salon 7bit9w
              - paragraph [ref=e139]: Auto-generated test business description 7bit9w
              - generic [ref=e140]:
                - generic [ref=e141]: UTC
                - generic [ref=e142]: USD
            - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD" [ref=e143]:
              - generic [ref=e144]: Test Salon 7nf9hv
              - paragraph [ref=e145]: Auto-generated test business description 7nf9hv
              - generic [ref=e146]:
                - generic [ref=e147]: UTC
                - generic [ref=e148]: USD
            - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD" [ref=e149]:
              - generic [ref=e150]: Test Salon 7o4pn7
              - paragraph [ref=e151]: Auto-generated test business description 7o4pn7
              - generic [ref=e152]:
                - generic [ref=e153]: UTC
                - generic [ref=e154]: USD
            - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD" [ref=e155]:
              - generic [ref=e156]: Test Salon 8h9i5t
              - paragraph [ref=e157]: Auto-generated test business description 8h9i5t
              - generic [ref=e158]:
                - generic [ref=e159]: UTC
                - generic [ref=e160]: USD
            - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD" [ref=e161]:
              - generic [ref=e162]: Test Salon a68qlk
              - paragraph [ref=e163]: Auto-generated test business description a68qlk
              - generic [ref=e164]:
                - generic [ref=e165]: UTC
                - generic [ref=e166]: USD
            - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD" [ref=e167]:
              - generic [ref=e168]: Test Salon asymmy
              - paragraph [ref=e169]: Auto-generated test business description asymmy
              - generic [ref=e170]:
                - generic [ref=e171]: UTC
                - generic [ref=e172]: USD
            - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD" [ref=e173]:
              - generic [ref=e174]: Test Salon atz1m3
              - paragraph [ref=e175]: Auto-generated test business description atz1m3
              - generic [ref=e176]:
                - generic [ref=e177]: UTC
                - generic [ref=e178]: USD
            - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD" [ref=e179]:
              - generic [ref=e180]: Test Salon b76urd
              - paragraph [ref=e181]: Auto-generated test business description b76urd
              - generic [ref=e182]:
                - generic [ref=e183]: UTC
                - generic [ref=e184]: USD
            - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD" [ref=e185]:
              - generic [ref=e186]: Test Salon btnwca
              - paragraph [ref=e187]: Auto-generated test business description btnwca
              - generic [ref=e188]:
                - generic [ref=e189]: UTC
                - generic [ref=e190]: USD
            - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD" [ref=e191]:
              - generic [ref=e192]: Test Salon c0uqdl
              - paragraph [ref=e193]: Auto-generated test business description c0uqdl
              - generic [ref=e194]:
                - generic [ref=e195]: UTC
                - generic [ref=e196]: USD
            - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD" [ref=e197]:
              - generic [ref=e198]: Test Salon cemiq4
              - paragraph [ref=e199]: Auto-generated test business description cemiq4
              - generic [ref=e200]:
                - generic [ref=e201]: UTC
                - generic [ref=e202]: USD
            - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD" [ref=e203]:
              - generic [ref=e204]: Test Salon cs0sk6
              - paragraph [ref=e205]: Auto-generated test business description cs0sk6
              - generic [ref=e206]:
                - generic [ref=e207]: UTC
                - generic [ref=e208]: USD
            - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD" [ref=e209]:
              - generic [ref=e210]: Test Salon d2s8sx
              - paragraph [ref=e211]: Auto-generated test business description d2s8sx
              - generic [ref=e212]:
                - generic [ref=e213]: UTC
                - generic [ref=e214]: USD
            - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD" [ref=e215]:
              - generic [ref=e216]: Test Salon egni33
              - paragraph [ref=e217]: Auto-generated test business description egni33
              - generic [ref=e218]:
                - generic [ref=e219]: UTC
                - generic [ref=e220]: USD
            - button "Test Salon eog81f Auto-generated test business description eog81f UTC USD" [ref=e221]:
              - generic [ref=e222]: Test Salon eog81f
              - paragraph [ref=e223]: Auto-generated test business description eog81f
              - generic [ref=e224]:
                - generic [ref=e225]: UTC
                - generic [ref=e226]: USD
            - button "Test Salon esyzer Auto-generated test business description esyzer UTC USD" [ref=e227]:
              - generic [ref=e228]: Test Salon esyzer
              - paragraph [ref=e229]: Auto-generated test business description esyzer
              - generic [ref=e230]:
                - generic [ref=e231]: UTC
                - generic [ref=e232]: USD
            - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD" [ref=e233]:
              - generic [ref=e234]: Test Salon fnk1tt
              - paragraph [ref=e235]: Auto-generated test business description fnk1tt
              - generic [ref=e236]:
                - generic [ref=e237]: UTC
                - generic [ref=e238]: USD
            - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD" [ref=e239]:
              - generic [ref=e240]: Test Salon fwgmjd
              - paragraph [ref=e241]: Auto-generated test business description fwgmjd
              - generic [ref=e242]:
                - generic [ref=e243]: UTC
                - generic [ref=e244]: USD
            - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD" [ref=e245]:
              - generic [ref=e246]: Test Salon gi47ns
              - paragraph [ref=e247]: Auto-generated test business description gi47ns
              - generic [ref=e248]:
                - generic [ref=e249]: UTC
                - generic [ref=e250]: USD
            - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD" [ref=e251]:
              - generic [ref=e252]: Test Salon gl6fqe
              - paragraph [ref=e253]: Auto-generated test business description gl6fqe
              - generic [ref=e254]:
                - generic [ref=e255]: UTC
                - generic [ref=e256]: USD
            - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD" [ref=e257]:
              - generic [ref=e258]: Test Salon gl7ea7
              - paragraph [ref=e259]: Auto-generated test business description gl7ea7
              - generic [ref=e260]:
                - generic [ref=e261]: UTC
                - generic [ref=e262]: USD
            - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD" [ref=e263]:
              - generic [ref=e264]: Test Salon hxzb30
              - paragraph [ref=e265]: Auto-generated test business description hxzb30
              - generic [ref=e266]:
                - generic [ref=e267]: UTC
                - generic [ref=e268]: USD
            - button "Test Salon igp24q Auto-generated test business description igp24q UTC USD" [ref=e269]:
              - generic [ref=e270]: Test Salon igp24q
              - paragraph [ref=e271]: Auto-generated test business description igp24q
              - generic [ref=e272]:
                - generic [ref=e273]: UTC
                - generic [ref=e274]: USD
            - button "Test Salon iq4yfy Auto-generated test business description iq4yfy UTC USD" [ref=e275]:
              - generic [ref=e276]: Test Salon iq4yfy
              - paragraph [ref=e277]: Auto-generated test business description iq4yfy
              - generic [ref=e278]:
                - generic [ref=e279]: UTC
                - generic [ref=e280]: USD
            - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD" [ref=e281]:
              - generic [ref=e282]: Test Salon ls8uew
              - paragraph [ref=e283]: Auto-generated test business description ls8uew
              - generic [ref=e284]:
                - generic [ref=e285]: UTC
                - generic [ref=e286]: USD
            - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD" [ref=e287]:
              - generic [ref=e288]: Test Salon lxdrvs
              - paragraph [ref=e289]: Auto-generated test business description lxdrvs
              - generic [ref=e290]:
                - generic [ref=e291]: UTC
                - generic [ref=e292]: USD
            - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD" [ref=e293]:
              - generic [ref=e294]: Test Salon niqqre
              - paragraph [ref=e295]: Auto-generated test business description niqqre
              - generic [ref=e296]:
                - generic [ref=e297]: UTC
                - generic [ref=e298]: USD
            - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD" [ref=e299]:
              - generic [ref=e300]: Test Salon nnnmtw
              - paragraph [ref=e301]: Auto-generated test business description nnnmtw
              - generic [ref=e302]:
                - generic [ref=e303]: UTC
                - generic [ref=e304]: USD
            - button "Test Salon nrc7yx Auto-generated test business description nrc7yx UTC USD" [ref=e305]:
              - generic [ref=e306]: Test Salon nrc7yx
              - paragraph [ref=e307]: Auto-generated test business description nrc7yx
              - generic [ref=e308]:
                - generic [ref=e309]: UTC
                - generic [ref=e310]: USD
            - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD" [ref=e311]:
              - generic [ref=e312]: Test Salon oeux2s
              - paragraph [ref=e313]: Auto-generated test business description oeux2s
              - generic [ref=e314]:
                - generic [ref=e315]: UTC
                - generic [ref=e316]: USD
            - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD" [ref=e317]:
              - generic [ref=e318]: Test Salon orw3o4
              - paragraph [ref=e319]: Auto-generated test business description orw3o4
              - generic [ref=e320]:
                - generic [ref=e321]: UTC
                - generic [ref=e322]: USD
            - button "Test Salon ox1a1r Auto-generated test business description ox1a1r UTC USD" [ref=e323]:
              - generic [ref=e324]: Test Salon ox1a1r
              - paragraph [ref=e325]: Auto-generated test business description ox1a1r
              - generic [ref=e326]:
                - generic [ref=e327]: UTC
                - generic [ref=e328]: USD
            - button "Test Salon p1hgbn Auto-generated test business description p1hgbn UTC USD" [ref=e329]:
              - generic [ref=e330]: Test Salon p1hgbn
              - paragraph [ref=e331]: Auto-generated test business description p1hgbn
              - generic [ref=e332]:
                - generic [ref=e333]: UTC
                - generic [ref=e334]: USD
            - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD" [ref=e335]:
              - generic [ref=e336]: Test Salon pyoepe
              - paragraph [ref=e337]: Auto-generated test business description pyoepe
              - generic [ref=e338]:
                - generic [ref=e339]: UTC
                - generic [ref=e340]: USD
            - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD" [ref=e341]:
              - generic [ref=e342]: Test Salon qcm18x
              - paragraph [ref=e343]: Auto-generated test business description qcm18x
              - generic [ref=e344]:
                - generic [ref=e345]: UTC
                - generic [ref=e346]: USD
            - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD" [ref=e347]:
              - generic [ref=e348]: Test Salon qlbret
              - paragraph [ref=e349]: Auto-generated test business description qlbret
              - generic [ref=e350]:
                - generic [ref=e351]: UTC
                - generic [ref=e352]: USD
            - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD" [ref=e353]:
              - generic [ref=e354]: Test Salon qr0hfk
              - paragraph [ref=e355]: Auto-generated test business description qr0hfk
              - generic [ref=e356]:
                - generic [ref=e357]: UTC
                - generic [ref=e358]: USD
            - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD" [ref=e359]:
              - generic [ref=e360]: Test Salon r9cxkb
              - paragraph [ref=e361]: Auto-generated test business description r9cxkb
              - generic [ref=e362]:
                - generic [ref=e363]: UTC
                - generic [ref=e364]: USD
            - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD" [ref=e365]:
              - generic [ref=e366]: Test Salon s7a7st
              - paragraph [ref=e367]: Auto-generated test business description s7a7st
              - generic [ref=e368]:
                - generic [ref=e369]: UTC
                - generic [ref=e370]: USD
            - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD" [ref=e371]:
              - generic [ref=e372]: Test Salon sky7cf
              - paragraph [ref=e373]: Auto-generated test business description sky7cf
              - generic [ref=e374]:
                - generic [ref=e375]: UTC
                - generic [ref=e376]: USD
            - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD" [ref=e377]:
              - generic [ref=e378]: Test Salon t9wjh7
              - paragraph [ref=e379]: Auto-generated test business description t9wjh7
              - generic [ref=e380]:
                - generic [ref=e381]: UTC
                - generic [ref=e382]: USD
            - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD" [ref=e383]:
              - generic [ref=e384]: Test Salon ta5ce7
              - paragraph [ref=e385]: Auto-generated test business description ta5ce7
              - generic [ref=e386]:
                - generic [ref=e387]: UTC
                - generic [ref=e388]: USD
            - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD" [ref=e389]:
              - generic [ref=e390]: Test Salon u0g7lb
              - paragraph [ref=e391]: Auto-generated test business description u0g7lb
              - generic [ref=e392]:
                - generic [ref=e393]: UTC
                - generic [ref=e394]: USD
            - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD" [ref=e395]:
              - generic [ref=e396]: Test Salon u8pzhc
              - paragraph [ref=e397]: Auto-generated test business description u8pzhc
              - generic [ref=e398]:
                - generic [ref=e399]: UTC
                - generic [ref=e400]: USD
            - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD" [ref=e401]:
              - generic [ref=e402]: Test Salon ub3aeu
              - paragraph [ref=e403]: Auto-generated test business description ub3aeu
              - generic [ref=e404]:
                - generic [ref=e405]: UTC
                - generic [ref=e406]: USD
            - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD" [ref=e407]:
              - generic [ref=e408]: Test Salon ui869c
              - paragraph [ref=e409]: Auto-generated test business description ui869c
              - generic [ref=e410]:
                - generic [ref=e411]: UTC
                - generic [ref=e412]: USD
            - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD" [ref=e413]:
              - generic [ref=e414]: Test Salon vamdvm
              - paragraph [ref=e415]: Auto-generated test business description vamdvm
              - generic [ref=e416]:
                - generic [ref=e417]: UTC
                - generic [ref=e418]: USD
            - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD" [ref=e419]:
              - generic [ref=e420]: Test Salon vsxf4h
              - paragraph [ref=e421]: Auto-generated test business description vsxf4h
              - generic [ref=e422]:
                - generic [ref=e423]: UTC
                - generic [ref=e424]: USD
            - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD" [ref=e425]:
              - generic [ref=e426]: Test Salon wpsv41
              - paragraph [ref=e427]: Auto-generated test business description wpsv41
              - generic [ref=e428]:
                - generic [ref=e429]: UTC
                - generic [ref=e430]: USD
            - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD" [ref=e431]:
              - generic [ref=e432]: Test Salon wqwz95
              - paragraph [ref=e433]: Auto-generated test business description wqwz95
              - generic [ref=e434]:
                - generic [ref=e435]: UTC
                - generic [ref=e436]: USD
            - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD" [ref=e437]:
              - generic [ref=e438]: Test Salon x4gtj1
              - paragraph [ref=e439]: Auto-generated test business description x4gtj1
              - generic [ref=e440]:
                - generic [ref=e441]: UTC
                - generic [ref=e442]: USD
            - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD" [ref=e443]:
              - generic [ref=e444]: Test Salon x9lli8
              - paragraph [ref=e445]: Auto-generated test business description x9lli8
              - generic [ref=e446]:
                - generic [ref=e447]: UTC
                - generic [ref=e448]: USD
            - button "Test Salon xvqmlv UTC USD" [ref=e449]:
              - generic [ref=e450]: Test Salon xvqmlv
              - generic [ref=e451]:
                - generic [ref=e452]: UTC
                - generic [ref=e453]: USD
            - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD" [ref=e454]:
              - generic [ref=e455]: Test Salon ztn2hy
              - paragraph [ref=e456]: Auto-generated test business description ztn2hy
              - generic [ref=e457]:
                - generic [ref=e458]: UTC
                - generic [ref=e459]: USD
            - button "Zen Spa UTC USD" [ref=e460]:
              - generic [ref=e461]: Zen Spa
              - generic [ref=e462]:
                - generic [ref=e463]: UTC
                - generic [ref=e464]: USD
            - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD" [ref=e465]:
              - generic [ref=e466]: chingcho
              - paragraph [ref=e467]: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
              - generic [ref=e468]:
                - generic [ref=e469]: UTC
                - generic [ref=e470]: USD
        - generic [ref=e471]:
          - generic [ref=e472]:
            - heading "Agenda" [level=3] [ref=e473]
            - paragraph [ref=e474]: No address listed · No phone
          - separator [ref=e475]
          - generic [ref=e476]:
            - heading "2. Select Service" [level=4] [ref=e477]
            - button "Standard Appointment 50.00 USD General appointment service ⏱️ 30 mins" [ref=e479]:
              - generic [ref=e480]:
                - generic [ref=e481]: Standard Appointment
                - generic [ref=e482]: 50.00 USD
              - paragraph [ref=e483]: General appointment service
              - generic [ref=e484]: ⏱️ 30 mins
          - generic [ref=e485]:
            - generic [ref=e486]:
              - generic [ref=e487]: Select Date
              - button "📅 Sun, Aug 23, 2026 ▼" [ref=e489] [cursor=pointer]:
                - generic [ref=e490]:
                  - generic [ref=e491]: 📅
                  - generic [ref=e492]: Sun, Aug 23, 2026
                - generic [ref=e493]: ▼
            - generic [ref=e494]:
              - generic [ref=e495]: Preferred Staff (Optional)
              - combobox [ref=e496]:
                - option "Any available staff member" [selected]
                - option "Primary Specialist"
          - generic [ref=e497]:
            - generic [ref=e499]:
              - heading "3. Available Slots" [level=4] [ref=e500]
              - generic [ref=e501]: All times shown in business timezone (UTC)
            - paragraph [ref=e502]: No slots available for this date/service.
    - contentinfo [ref=e503]:
      - generic [ref=e504]:
        - generic [ref=e505]:
          - generic [ref=e506]: "Y"
          - generic [ref=e507]: Yarivo Appointments
          - generic [ref=e508]: ·
          - generic [ref=e509]: yarivo.com
        - generic [ref=e510]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=e516] [cursor=pointer]
  - alert [ref=e520]
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