# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\regression-business-hours.spec.js >> @regression Business Operating Hours >> should configure and persist business opening and closing hours
- Location: tests\regression\regression-business-hours.spec.js:9:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /hours/i })

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
            - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD" [ref=f1e65]:
              - generic [ref=f1e66]: Test Salon 0amdq1
              - paragraph [ref=f1e67]: Auto-generated test business description 0amdq1
              - generic [ref=f1e68]:
                - generic [ref=f1e69]: UTC
                - generic [ref=f1e70]: USD
            - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD" [ref=f1e71]:
              - generic [ref=f1e72]: Test Salon 0bcq40
              - paragraph [ref=f1e73]: Auto-generated test business description 0bcq40
              - generic [ref=f1e74]:
                - generic [ref=f1e75]: UTC
                - generic [ref=f1e76]: USD
            - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD" [ref=f1e77]:
              - generic [ref=f1e78]: Test Salon 1bip1q
              - paragraph [ref=f1e79]: Auto-generated test business description 1bip1q
              - generic [ref=f1e80]:
                - generic [ref=f1e81]: UTC
                - generic [ref=f1e82]: USD
            - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD" [ref=f1e83]:
              - generic [ref=f1e84]: Test Salon 1gtheb
              - paragraph [ref=f1e85]: Auto-generated test business description 1gtheb
              - generic [ref=f1e86]:
                - generic [ref=f1e87]: UTC
                - generic [ref=f1e88]: USD
            - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD" [ref=f1e89]:
              - generic [ref=f1e90]: Test Salon 1hiobw
              - paragraph [ref=f1e91]: Auto-generated test business description 1hiobw
              - generic [ref=f1e92]:
                - generic [ref=f1e93]: UTC
                - generic [ref=f1e94]: USD
            - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD" [ref=f1e95]:
              - generic [ref=f1e96]: Test Salon 35kobd
              - paragraph [ref=f1e97]: Auto-generated test business description 35kobd
              - generic [ref=f1e98]:
                - generic [ref=f1e99]: UTC
                - generic [ref=f1e100]: USD
            - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD" [ref=f1e101]:
              - generic [ref=f1e102]: Test Salon 3kcg5c
              - paragraph [ref=f1e103]: Auto-generated test business description 3kcg5c
              - generic [ref=f1e104]:
                - generic [ref=f1e105]: UTC
                - generic [ref=f1e106]: USD
            - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD" [ref=f1e107]:
              - generic [ref=f1e108]: Test Salon 4odkr7
              - paragraph [ref=f1e109]: Auto-generated test business description 4odkr7
              - generic [ref=f1e110]:
                - generic [ref=f1e111]: UTC
                - generic [ref=f1e112]: USD
            - button "Test Salon 4xohph Auto-generated test business description 4xohph UTC USD" [ref=f1e113]:
              - generic [ref=f1e114]: Test Salon 4xohph
              - paragraph [ref=f1e115]: Auto-generated test business description 4xohph
              - generic [ref=f1e116]:
                - generic [ref=f1e117]: UTC
                - generic [ref=f1e118]: USD
            - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD" [ref=f1e119]:
              - generic [ref=f1e120]: Test Salon 5kpeld
              - paragraph [ref=f1e121]: Auto-generated test business description 5kpeld
              - generic [ref=f1e122]:
                - generic [ref=f1e123]: UTC
                - generic [ref=f1e124]: USD
            - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD" [ref=f1e125]:
              - generic [ref=f1e126]: Test Salon 6xqwra
              - paragraph [ref=f1e127]: Auto-generated test business description 6xqwra
              - generic [ref=f1e128]:
                - generic [ref=f1e129]: UTC
                - generic [ref=f1e130]: USD
            - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD" [ref=f1e131]:
              - generic [ref=f1e132]: Test Salon 76cxtv
              - paragraph [ref=f1e133]: Auto-generated test business description 76cxtv
              - generic [ref=f1e134]:
                - generic [ref=f1e135]: UTC
                - generic [ref=f1e136]: USD
            - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD" [ref=f1e137]:
              - generic [ref=f1e138]: Test Salon 7bit9w
              - paragraph [ref=f1e139]: Auto-generated test business description 7bit9w
              - generic [ref=f1e140]:
                - generic [ref=f1e141]: UTC
                - generic [ref=f1e142]: USD
            - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD" [ref=f1e143]:
              - generic [ref=f1e144]: Test Salon 7nf9hv
              - paragraph [ref=f1e145]: Auto-generated test business description 7nf9hv
              - generic [ref=f1e146]:
                - generic [ref=f1e147]: UTC
                - generic [ref=f1e148]: USD
            - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD" [ref=f1e149]:
              - generic [ref=f1e150]: Test Salon 7o4pn7
              - paragraph [ref=f1e151]: Auto-generated test business description 7o4pn7
              - generic [ref=f1e152]:
                - generic [ref=f1e153]: UTC
                - generic [ref=f1e154]: USD
            - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD" [ref=f1e155]:
              - generic [ref=f1e156]: Test Salon 8h9i5t
              - paragraph [ref=f1e157]: Auto-generated test business description 8h9i5t
              - generic [ref=f1e158]:
                - generic [ref=f1e159]: UTC
                - generic [ref=f1e160]: USD
            - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD" [ref=f1e161]:
              - generic [ref=f1e162]: Test Salon a68qlk
              - paragraph [ref=f1e163]: Auto-generated test business description a68qlk
              - generic [ref=f1e164]:
                - generic [ref=f1e165]: UTC
                - generic [ref=f1e166]: USD
            - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD" [ref=f1e167]:
              - generic [ref=f1e168]: Test Salon asymmy
              - paragraph [ref=f1e169]: Auto-generated test business description asymmy
              - generic [ref=f1e170]:
                - generic [ref=f1e171]: UTC
                - generic [ref=f1e172]: USD
            - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD" [ref=f1e173]:
              - generic [ref=f1e174]: Test Salon atz1m3
              - paragraph [ref=f1e175]: Auto-generated test business description atz1m3
              - generic [ref=f1e176]:
                - generic [ref=f1e177]: UTC
                - generic [ref=f1e178]: USD
            - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD" [ref=f1e179]:
              - generic [ref=f1e180]: Test Salon b76urd
              - paragraph [ref=f1e181]: Auto-generated test business description b76urd
              - generic [ref=f1e182]:
                - generic [ref=f1e183]: UTC
                - generic [ref=f1e184]: USD
            - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD" [ref=f1e185]:
              - generic [ref=f1e186]: Test Salon btnwca
              - paragraph [ref=f1e187]: Auto-generated test business description btnwca
              - generic [ref=f1e188]:
                - generic [ref=f1e189]: UTC
                - generic [ref=f1e190]: USD
            - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD" [ref=f1e191]:
              - generic [ref=f1e192]: Test Salon c0uqdl
              - paragraph [ref=f1e193]: Auto-generated test business description c0uqdl
              - generic [ref=f1e194]:
                - generic [ref=f1e195]: UTC
                - generic [ref=f1e196]: USD
            - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD" [ref=f1e197]:
              - generic [ref=f1e198]: Test Salon cemiq4
              - paragraph [ref=f1e199]: Auto-generated test business description cemiq4
              - generic [ref=f1e200]:
                - generic [ref=f1e201]: UTC
                - generic [ref=f1e202]: USD
            - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD" [ref=f1e203]:
              - generic [ref=f1e204]: Test Salon cs0sk6
              - paragraph [ref=f1e205]: Auto-generated test business description cs0sk6
              - generic [ref=f1e206]:
                - generic [ref=f1e207]: UTC
                - generic [ref=f1e208]: USD
            - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD" [ref=f1e209]:
              - generic [ref=f1e210]: Test Salon d2s8sx
              - paragraph [ref=f1e211]: Auto-generated test business description d2s8sx
              - generic [ref=f1e212]:
                - generic [ref=f1e213]: UTC
                - generic [ref=f1e214]: USD
            - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD" [ref=f1e215]:
              - generic [ref=f1e216]: Test Salon egni33
              - paragraph [ref=f1e217]: Auto-generated test business description egni33
              - generic [ref=f1e218]:
                - generic [ref=f1e219]: UTC
                - generic [ref=f1e220]: USD
            - button "Test Salon eog81f Auto-generated test business description eog81f UTC USD" [ref=f1e221]:
              - generic [ref=f1e222]: Test Salon eog81f
              - paragraph [ref=f1e223]: Auto-generated test business description eog81f
              - generic [ref=f1e224]:
                - generic [ref=f1e225]: UTC
                - generic [ref=f1e226]: USD
            - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD" [ref=f1e227]:
              - generic [ref=f1e228]: Test Salon fnk1tt
              - paragraph [ref=f1e229]: Auto-generated test business description fnk1tt
              - generic [ref=f1e230]:
                - generic [ref=f1e231]: UTC
                - generic [ref=f1e232]: USD
            - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD" [ref=f1e233]:
              - generic [ref=f1e234]: Test Salon fwgmjd
              - paragraph [ref=f1e235]: Auto-generated test business description fwgmjd
              - generic [ref=f1e236]:
                - generic [ref=f1e237]: UTC
                - generic [ref=f1e238]: USD
            - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD" [ref=f1e239]:
              - generic [ref=f1e240]: Test Salon gi47ns
              - paragraph [ref=f1e241]: Auto-generated test business description gi47ns
              - generic [ref=f1e242]:
                - generic [ref=f1e243]: UTC
                - generic [ref=f1e244]: USD
            - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD" [ref=f1e245]:
              - generic [ref=f1e246]: Test Salon gl6fqe
              - paragraph [ref=f1e247]: Auto-generated test business description gl6fqe
              - generic [ref=f1e248]:
                - generic [ref=f1e249]: UTC
                - generic [ref=f1e250]: USD
            - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD" [ref=f1e251]:
              - generic [ref=f1e252]: Test Salon gl7ea7
              - paragraph [ref=f1e253]: Auto-generated test business description gl7ea7
              - generic [ref=f1e254]:
                - generic [ref=f1e255]: UTC
                - generic [ref=f1e256]: USD
            - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD" [ref=f1e257]:
              - generic [ref=f1e258]: Test Salon hxzb30
              - paragraph [ref=f1e259]: Auto-generated test business description hxzb30
              - generic [ref=f1e260]:
                - generic [ref=f1e261]: UTC
                - generic [ref=f1e262]: USD
            - button "Test Salon igp24q Auto-generated test business description igp24q UTC USD" [ref=f1e263]:
              - generic [ref=f1e264]: Test Salon igp24q
              - paragraph [ref=f1e265]: Auto-generated test business description igp24q
              - generic [ref=f1e266]:
                - generic [ref=f1e267]: UTC
                - generic [ref=f1e268]: USD
            - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD" [ref=f1e269]:
              - generic [ref=f1e270]: Test Salon ls8uew
              - paragraph [ref=f1e271]: Auto-generated test business description ls8uew
              - generic [ref=f1e272]:
                - generic [ref=f1e273]: UTC
                - generic [ref=f1e274]: USD
            - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD" [ref=f1e275]:
              - generic [ref=f1e276]: Test Salon lxdrvs
              - paragraph [ref=f1e277]: Auto-generated test business description lxdrvs
              - generic [ref=f1e278]:
                - generic [ref=f1e279]: UTC
                - generic [ref=f1e280]: USD
            - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD" [ref=f1e281]:
              - generic [ref=f1e282]: Test Salon niqqre
              - paragraph [ref=f1e283]: Auto-generated test business description niqqre
              - generic [ref=f1e284]:
                - generic [ref=f1e285]: UTC
                - generic [ref=f1e286]: USD
            - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD" [ref=f1e287]:
              - generic [ref=f1e288]: Test Salon nnnmtw
              - paragraph [ref=f1e289]: Auto-generated test business description nnnmtw
              - generic [ref=f1e290]:
                - generic [ref=f1e291]: UTC
                - generic [ref=f1e292]: USD
            - button "Test Salon nrc7yx Auto-generated test business description nrc7yx UTC USD" [ref=f1e293]:
              - generic [ref=f1e294]: Test Salon nrc7yx
              - paragraph [ref=f1e295]: Auto-generated test business description nrc7yx
              - generic [ref=f1e296]:
                - generic [ref=f1e297]: UTC
                - generic [ref=f1e298]: USD
            - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD" [ref=f1e299]:
              - generic [ref=f1e300]: Test Salon oeux2s
              - paragraph [ref=f1e301]: Auto-generated test business description oeux2s
              - generic [ref=f1e302]:
                - generic [ref=f1e303]: UTC
                - generic [ref=f1e304]: USD
            - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD" [ref=f1e305]:
              - generic [ref=f1e306]: Test Salon orw3o4
              - paragraph [ref=f1e307]: Auto-generated test business description orw3o4
              - generic [ref=f1e308]:
                - generic [ref=f1e309]: UTC
                - generic [ref=f1e310]: USD
            - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD" [ref=f1e311]:
              - generic [ref=f1e312]: Test Salon pyoepe
              - paragraph [ref=f1e313]: Auto-generated test business description pyoepe
              - generic [ref=f1e314]:
                - generic [ref=f1e315]: UTC
                - generic [ref=f1e316]: USD
            - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD" [ref=f1e317]:
              - generic [ref=f1e318]: Test Salon qcm18x
              - paragraph [ref=f1e319]: Auto-generated test business description qcm18x
              - generic [ref=f1e320]:
                - generic [ref=f1e321]: UTC
                - generic [ref=f1e322]: USD
            - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD" [ref=f1e323]:
              - generic [ref=f1e324]: Test Salon qlbret
              - paragraph [ref=f1e325]: Auto-generated test business description qlbret
              - generic [ref=f1e326]:
                - generic [ref=f1e327]: UTC
                - generic [ref=f1e328]: USD
            - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD" [ref=f1e329]:
              - generic [ref=f1e330]: Test Salon qr0hfk
              - paragraph [ref=f1e331]: Auto-generated test business description qr0hfk
              - generic [ref=f1e332]:
                - generic [ref=f1e333]: UTC
                - generic [ref=f1e334]: USD
            - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD" [ref=f1e335]:
              - generic [ref=f1e336]: Test Salon r9cxkb
              - paragraph [ref=f1e337]: Auto-generated test business description r9cxkb
              - generic [ref=f1e338]:
                - generic [ref=f1e339]: UTC
                - generic [ref=f1e340]: USD
            - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD" [ref=f1e341]:
              - generic [ref=f1e342]: Test Salon s7a7st
              - paragraph [ref=f1e343]: Auto-generated test business description s7a7st
              - generic [ref=f1e344]:
                - generic [ref=f1e345]: UTC
                - generic [ref=f1e346]: USD
            - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD" [ref=f1e347]:
              - generic [ref=f1e348]: Test Salon sky7cf
              - paragraph [ref=f1e349]: Auto-generated test business description sky7cf
              - generic [ref=f1e350]:
                - generic [ref=f1e351]: UTC
                - generic [ref=f1e352]: USD
            - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD" [ref=f1e353]:
              - generic [ref=f1e354]: Test Salon t9wjh7
              - paragraph [ref=f1e355]: Auto-generated test business description t9wjh7
              - generic [ref=f1e356]:
                - generic [ref=f1e357]: UTC
                - generic [ref=f1e358]: USD
            - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD" [ref=f1e359]:
              - generic [ref=f1e360]: Test Salon ta5ce7
              - paragraph [ref=f1e361]: Auto-generated test business description ta5ce7
              - generic [ref=f1e362]:
                - generic [ref=f1e363]: UTC
                - generic [ref=f1e364]: USD
            - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD" [ref=f1e365]:
              - generic [ref=f1e366]: Test Salon u0g7lb
              - paragraph [ref=f1e367]: Auto-generated test business description u0g7lb
              - generic [ref=f1e368]:
                - generic [ref=f1e369]: UTC
                - generic [ref=f1e370]: USD
            - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD" [ref=f1e371]:
              - generic [ref=f1e372]: Test Salon u8pzhc
              - paragraph [ref=f1e373]: Auto-generated test business description u8pzhc
              - generic [ref=f1e374]:
                - generic [ref=f1e375]: UTC
                - generic [ref=f1e376]: USD
            - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD" [ref=f1e377]:
              - generic [ref=f1e378]: Test Salon ub3aeu
              - paragraph [ref=f1e379]: Auto-generated test business description ub3aeu
              - generic [ref=f1e380]:
                - generic [ref=f1e381]: UTC
                - generic [ref=f1e382]: USD
            - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD" [ref=f1e383]:
              - generic [ref=f1e384]: Test Salon ui869c
              - paragraph [ref=f1e385]: Auto-generated test business description ui869c
              - generic [ref=f1e386]:
                - generic [ref=f1e387]: UTC
                - generic [ref=f1e388]: USD
            - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD" [ref=f1e389]:
              - generic [ref=f1e390]: Test Salon vamdvm
              - paragraph [ref=f1e391]: Auto-generated test business description vamdvm
              - generic [ref=f1e392]:
                - generic [ref=f1e393]: UTC
                - generic [ref=f1e394]: USD
            - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD" [ref=f1e395]:
              - generic [ref=f1e396]: Test Salon vsxf4h
              - paragraph [ref=f1e397]: Auto-generated test business description vsxf4h
              - generic [ref=f1e398]:
                - generic [ref=f1e399]: UTC
                - generic [ref=f1e400]: USD
            - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD" [ref=f1e401]:
              - generic [ref=f1e402]: Test Salon wpsv41
              - paragraph [ref=f1e403]: Auto-generated test business description wpsv41
              - generic [ref=f1e404]:
                - generic [ref=f1e405]: UTC
                - generic [ref=f1e406]: USD
            - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD" [ref=f1e407]:
              - generic [ref=f1e408]: Test Salon wqwz95
              - paragraph [ref=f1e409]: Auto-generated test business description wqwz95
              - generic [ref=f1e410]:
                - generic [ref=f1e411]: UTC
                - generic [ref=f1e412]: USD
            - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD" [ref=f1e413]:
              - generic [ref=f1e414]: Test Salon x4gtj1
              - paragraph [ref=f1e415]: Auto-generated test business description x4gtj1
              - generic [ref=f1e416]:
                - generic [ref=f1e417]: UTC
                - generic [ref=f1e418]: USD
            - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD" [ref=f1e419]:
              - generic [ref=f1e420]: Test Salon x9lli8
              - paragraph [ref=f1e421]: Auto-generated test business description x9lli8
              - generic [ref=f1e422]:
                - generic [ref=f1e423]: UTC
                - generic [ref=f1e424]: USD
            - button "Test Salon xvqmlv UTC USD" [ref=f1e425]:
              - generic [ref=f1e426]: Test Salon xvqmlv
              - generic [ref=f1e427]:
                - generic [ref=f1e428]: UTC
                - generic [ref=f1e429]: USD
            - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD" [ref=f1e430]:
              - generic [ref=f1e431]: Test Salon ztn2hy
              - paragraph [ref=f1e432]: Auto-generated test business description ztn2hy
              - generic [ref=f1e433]:
                - generic [ref=f1e434]: UTC
                - generic [ref=f1e435]: USD
            - button "Zen Spa UTC USD" [ref=f1e436]:
              - generic [ref=f1e437]: Zen Spa
              - generic [ref=f1e438]:
                - generic [ref=f1e439]: UTC
                - generic [ref=f1e440]: USD
            - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD" [ref=f1e441]:
              - generic [ref=f1e442]: chingcho
              - paragraph [ref=f1e443]: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
              - generic [ref=f1e444]:
                - generic [ref=f1e445]: UTC
                - generic [ref=f1e446]: USD
    - contentinfo [ref=f1e447]:
      - generic [ref=f1e448]:
        - generic [ref=f1e449]:
          - generic [ref=f1e450]: "Y"
          - generic [ref=f1e451]: Yarivo Appointments
          - generic [ref=f1e452]: ·
          - generic [ref=f1e453]: yarivo.com
        - generic [ref=f1e454]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=f1e460] [cursor=pointer]
  - alert [ref=f1e464]
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
  66  |     await this.staffTabBtn.click();
  67  |   }
  68  | 
  69  |   async switchToHoursTab() {
> 70  |     await this.hoursTabBtn.click();
      |                            ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
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
  167 |     await this.saveHoursBtn.click();
  168 |   }
  169 | }
  170 | 
```