# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge\edge-booking-scenarios.spec.js >> @edge Public Booking Edge Cases & Boundaries >> should show inline validation errors for invalid email formats
- Location: tests\edge\edge-booking-scenarios.spec.js:76:3

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[type="email"], input[placeholder*="jane@example.com" i]').first()

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
            - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD" [ref=e70]:
              - generic [ref=e71]: Test Salon 0amdq1
              - paragraph [ref=e72]: Auto-generated test business description 0amdq1
              - generic [ref=e73]:
                - generic [ref=e74]: UTC
                - generic [ref=e75]: USD
            - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD" [ref=e76]:
              - generic [ref=e77]: Test Salon 0bcq40
              - paragraph [ref=e78]: Auto-generated test business description 0bcq40
              - generic [ref=e79]:
                - generic [ref=e80]: UTC
                - generic [ref=e81]: USD
            - button "Test Salon 0bg9rw Auto-generated test business description 0bg9rw UTC USD" [ref=e82]:
              - generic [ref=e83]: Test Salon 0bg9rw
              - paragraph [ref=e84]: Auto-generated test business description 0bg9rw
              - generic [ref=e85]:
                - generic [ref=e86]: UTC
                - generic [ref=e87]: USD
            - button "Test Salon 0dcs33 Auto-generated test business description 0dcs33 UTC USD" [ref=e88]:
              - generic [ref=e89]: Test Salon 0dcs33
              - paragraph [ref=e90]: Auto-generated test business description 0dcs33
              - generic [ref=e91]:
                - generic [ref=e92]: UTC
                - generic [ref=e93]: USD
            - button "Test Salon 0kklgx Auto-generated test business description 0kklgx UTC USD" [ref=e94]:
              - generic [ref=e95]: Test Salon 0kklgx
              - paragraph [ref=e96]: Auto-generated test business description 0kklgx
              - generic [ref=e97]:
                - generic [ref=e98]: UTC
                - generic [ref=e99]: USD
            - button "Test Salon 0rleyb Auto-generated test business description 0rleyb UTC USD" [ref=e100]:
              - generic [ref=e101]: Test Salon 0rleyb
              - paragraph [ref=e102]: Auto-generated test business description 0rleyb
              - generic [ref=e103]:
                - generic [ref=e104]: UTC
                - generic [ref=e105]: USD
            - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD" [ref=e106]:
              - generic [ref=e107]: Test Salon 1bip1q
              - paragraph [ref=e108]: Auto-generated test business description 1bip1q
              - generic [ref=e109]:
                - generic [ref=e110]: UTC
                - generic [ref=e111]: USD
            - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD" [ref=e112]:
              - generic [ref=e113]: Test Salon 1gtheb
              - paragraph [ref=e114]: Auto-generated test business description 1gtheb
              - generic [ref=e115]:
                - generic [ref=e116]: UTC
                - generic [ref=e117]: USD
            - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD" [ref=e118]:
              - generic [ref=e119]: Test Salon 1hiobw
              - paragraph [ref=e120]: Auto-generated test business description 1hiobw
              - generic [ref=e121]:
                - generic [ref=e122]: UTC
                - generic [ref=e123]: USD
            - button "Test Salon 2vlcr5 Auto-generated test business description 2vlcr5 UTC USD" [ref=e124]:
              - generic [ref=e125]: Test Salon 2vlcr5
              - paragraph [ref=e126]: Auto-generated test business description 2vlcr5
              - generic [ref=e127]:
                - generic [ref=e128]: UTC
                - generic [ref=e129]: USD
            - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD" [ref=e130]:
              - generic [ref=e131]: Test Salon 35kobd
              - paragraph [ref=e132]: Auto-generated test business description 35kobd
              - generic [ref=e133]:
                - generic [ref=e134]: UTC
                - generic [ref=e135]: USD
            - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD" [ref=e136]:
              - generic [ref=e137]: Test Salon 3kcg5c
              - paragraph [ref=e138]: Auto-generated test business description 3kcg5c
              - generic [ref=e139]:
                - generic [ref=e140]: UTC
                - generic [ref=e141]: USD
            - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD" [ref=e142]:
              - generic [ref=e143]: Test Salon 4odkr7
              - paragraph [ref=e144]: Auto-generated test business description 4odkr7
              - generic [ref=e145]:
                - generic [ref=e146]: UTC
                - generic [ref=e147]: USD
            - button "Test Salon 4xohph Auto-generated test business description 4xohph UTC USD" [ref=e148]:
              - generic [ref=e149]: Test Salon 4xohph
              - paragraph [ref=e150]: Auto-generated test business description 4xohph
              - generic [ref=e151]:
                - generic [ref=e152]: UTC
                - generic [ref=e153]: USD
            - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD" [ref=e154]:
              - generic [ref=e155]: Test Salon 5kpeld
              - paragraph [ref=e156]: Auto-generated test business description 5kpeld
              - generic [ref=e157]:
                - generic [ref=e158]: UTC
                - generic [ref=e159]: USD
            - button "Test Salon 68wan7 Auto-generated test business description 68wan7 UTC USD" [ref=e160]:
              - generic [ref=e161]: Test Salon 68wan7
              - paragraph [ref=e162]: Auto-generated test business description 68wan7
              - generic [ref=e163]:
                - generic [ref=e164]: UTC
                - generic [ref=e165]: USD
            - button "Test Salon 6us1xu Auto-generated test business description 6us1xu UTC USD" [ref=e166]:
              - generic [ref=e167]: Test Salon 6us1xu
              - paragraph [ref=e168]: Auto-generated test business description 6us1xu
              - generic [ref=e169]:
                - generic [ref=e170]: UTC
                - generic [ref=e171]: USD
            - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD" [ref=e172]:
              - generic [ref=e173]: Test Salon 6xqwra
              - paragraph [ref=e174]: Auto-generated test business description 6xqwra
              - generic [ref=e175]:
                - generic [ref=e176]: UTC
                - generic [ref=e177]: USD
            - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD" [ref=e178]:
              - generic [ref=e179]: Test Salon 76cxtv
              - paragraph [ref=e180]: Auto-generated test business description 76cxtv
              - generic [ref=e181]:
                - generic [ref=e182]: UTC
                - generic [ref=e183]: USD
            - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD" [ref=e184]:
              - generic [ref=e185]: Test Salon 7bit9w
              - paragraph [ref=e186]: Auto-generated test business description 7bit9w
              - generic [ref=e187]:
                - generic [ref=e188]: UTC
                - generic [ref=e189]: USD
            - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD" [ref=e190]:
              - generic [ref=e191]: Test Salon 7nf9hv
              - paragraph [ref=e192]: Auto-generated test business description 7nf9hv
              - generic [ref=e193]:
                - generic [ref=e194]: UTC
                - generic [ref=e195]: USD
            - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD" [ref=e196]:
              - generic [ref=e197]: Test Salon 7o4pn7
              - paragraph [ref=e198]: Auto-generated test business description 7o4pn7
              - generic [ref=e199]:
                - generic [ref=e200]: UTC
                - generic [ref=e201]: USD
            - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD" [ref=e202]:
              - generic [ref=e203]: Test Salon 8h9i5t
              - paragraph [ref=e204]: Auto-generated test business description 8h9i5t
              - generic [ref=e205]:
                - generic [ref=e206]: UTC
                - generic [ref=e207]: USD
            - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD" [ref=e208]:
              - generic [ref=e209]: Test Salon a68qlk
              - paragraph [ref=e210]: Auto-generated test business description a68qlk
              - generic [ref=e211]:
                - generic [ref=e212]: UTC
                - generic [ref=e213]: USD
            - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD" [ref=e214]:
              - generic [ref=e215]: Test Salon asymmy
              - paragraph [ref=e216]: Auto-generated test business description asymmy
              - generic [ref=e217]:
                - generic [ref=e218]: UTC
                - generic [ref=e219]: USD
            - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD" [ref=e220]:
              - generic [ref=e221]: Test Salon atz1m3
              - paragraph [ref=e222]: Auto-generated test business description atz1m3
              - generic [ref=e223]:
                - generic [ref=e224]: UTC
                - generic [ref=e225]: USD
            - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD" [ref=e226]:
              - generic [ref=e227]: Test Salon b76urd
              - paragraph [ref=e228]: Auto-generated test business description b76urd
              - generic [ref=e229]:
                - generic [ref=e230]: UTC
                - generic [ref=e231]: USD
            - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD" [ref=e232]:
              - generic [ref=e233]: Test Salon btnwca
              - paragraph [ref=e234]: Auto-generated test business description btnwca
              - generic [ref=e235]:
                - generic [ref=e236]: UTC
                - generic [ref=e237]: USD
            - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD" [ref=e238]:
              - generic [ref=e239]: Test Salon c0uqdl
              - paragraph [ref=e240]: Auto-generated test business description c0uqdl
              - generic [ref=e241]:
                - generic [ref=e242]: UTC
                - generic [ref=e243]: USD
            - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD" [ref=e244]:
              - generic [ref=e245]: Test Salon cemiq4
              - paragraph [ref=e246]: Auto-generated test business description cemiq4
              - generic [ref=e247]:
                - generic [ref=e248]: UTC
                - generic [ref=e249]: USD
            - button "Test Salon cktfm5 Auto-generated test business description cktfm5 UTC USD" [ref=e250]:
              - generic [ref=e251]: Test Salon cktfm5
              - paragraph [ref=e252]: Auto-generated test business description cktfm5
              - generic [ref=e253]:
                - generic [ref=e254]: UTC
                - generic [ref=e255]: USD
            - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD" [ref=e256]:
              - generic [ref=e257]: Test Salon cs0sk6
              - paragraph [ref=e258]: Auto-generated test business description cs0sk6
              - generic [ref=e259]:
                - generic [ref=e260]: UTC
                - generic [ref=e261]: USD
            - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD" [ref=e262]:
              - generic [ref=e263]: Test Salon d2s8sx
              - paragraph [ref=e264]: Auto-generated test business description d2s8sx
              - generic [ref=e265]:
                - generic [ref=e266]: UTC
                - generic [ref=e267]: USD
            - button "Test Salon e2cvo6 Auto-generated test business description e2cvo6 UTC USD" [ref=e268]:
              - generic [ref=e269]: Test Salon e2cvo6
              - paragraph [ref=e270]: Auto-generated test business description e2cvo6
              - generic [ref=e271]:
                - generic [ref=e272]: UTC
                - generic [ref=e273]: USD
            - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD" [ref=e274]:
              - generic [ref=e275]: Test Salon egni33
              - paragraph [ref=e276]: Auto-generated test business description egni33
              - generic [ref=e277]:
                - generic [ref=e278]: UTC
                - generic [ref=e279]: USD
            - button "Test Salon eog81f Auto-generated test business description eog81f UTC USD" [ref=e280]:
              - generic [ref=e281]: Test Salon eog81f
              - paragraph [ref=e282]: Auto-generated test business description eog81f
              - generic [ref=e283]:
                - generic [ref=e284]: UTC
                - generic [ref=e285]: USD
            - button "Test Salon esyzer Auto-generated test business description esyzer UTC USD" [ref=e286]:
              - generic [ref=e287]: Test Salon esyzer
              - paragraph [ref=e288]: Auto-generated test business description esyzer
              - generic [ref=e289]:
                - generic [ref=e290]: UTC
                - generic [ref=e291]: USD
            - button "Test Salon f66hvn Auto-generated test business description f66hvn UTC USD" [ref=e292]:
              - generic [ref=e293]: Test Salon f66hvn
              - paragraph [ref=e294]: Auto-generated test business description f66hvn
              - generic [ref=e295]:
                - generic [ref=e296]: UTC
                - generic [ref=e297]: USD
            - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD" [ref=e298]:
              - generic [ref=e299]: Test Salon fnk1tt
              - paragraph [ref=e300]: Auto-generated test business description fnk1tt
              - generic [ref=e301]:
                - generic [ref=e302]: UTC
                - generic [ref=e303]: USD
            - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD" [ref=e304]:
              - generic [ref=e305]: Test Salon fwgmjd
              - paragraph [ref=e306]: Auto-generated test business description fwgmjd
              - generic [ref=e307]:
                - generic [ref=e308]: UTC
                - generic [ref=e309]: USD
            - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD" [ref=e310]:
              - generic [ref=e311]: Test Salon gi47ns
              - paragraph [ref=e312]: Auto-generated test business description gi47ns
              - generic [ref=e313]:
                - generic [ref=e314]: UTC
                - generic [ref=e315]: USD
            - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD" [ref=e316]:
              - generic [ref=e317]: Test Salon gl6fqe
              - paragraph [ref=e318]: Auto-generated test business description gl6fqe
              - generic [ref=e319]:
                - generic [ref=e320]: UTC
                - generic [ref=e321]: USD
            - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD" [ref=e322]:
              - generic [ref=e323]: Test Salon gl7ea7
              - paragraph [ref=e324]: Auto-generated test business description gl7ea7
              - generic [ref=e325]:
                - generic [ref=e326]: UTC
                - generic [ref=e327]: USD
            - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD" [ref=e328]:
              - generic [ref=e329]: Test Salon hxzb30
              - paragraph [ref=e330]: Auto-generated test business description hxzb30
              - generic [ref=e331]:
                - generic [ref=e332]: UTC
                - generic [ref=e333]: USD
            - button "Test Salon i2ygf8 Auto-generated test business description i2ygf8 UTC USD" [ref=e334]:
              - generic [ref=e335]: Test Salon i2ygf8
              - paragraph [ref=e336]: Auto-generated test business description i2ygf8
              - generic [ref=e337]:
                - generic [ref=e338]: UTC
                - generic [ref=e339]: USD
            - button "Test Salon igp24q Auto-generated test business description igp24q UTC USD" [ref=e340]:
              - generic [ref=e341]: Test Salon igp24q
              - paragraph [ref=e342]: Auto-generated test business description igp24q
              - generic [ref=e343]:
                - generic [ref=e344]: UTC
                - generic [ref=e345]: USD
            - button "Test Salon iq4yfy Auto-generated test business description iq4yfy UTC USD" [ref=e346]:
              - generic [ref=e347]: Test Salon iq4yfy
              - paragraph [ref=e348]: Auto-generated test business description iq4yfy
              - generic [ref=e349]:
                - generic [ref=e350]: UTC
                - generic [ref=e351]: USD
            - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD" [ref=e352]:
              - generic [ref=e353]: Test Salon ls8uew
              - paragraph [ref=e354]: Auto-generated test business description ls8uew
              - generic [ref=e355]:
                - generic [ref=e356]: UTC
                - generic [ref=e357]: USD
            - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD" [ref=e358]:
              - generic [ref=e359]: Test Salon lxdrvs
              - paragraph [ref=e360]: Auto-generated test business description lxdrvs
              - generic [ref=e361]:
                - generic [ref=e362]: UTC
                - generic [ref=e363]: USD
            - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD" [ref=e364]:
              - generic [ref=e365]: Test Salon niqqre
              - paragraph [ref=e366]: Auto-generated test business description niqqre
              - generic [ref=e367]:
                - generic [ref=e368]: UTC
                - generic [ref=e369]: USD
            - button "Test Salon njflen Auto-generated test business description njflen UTC USD" [ref=e370]:
              - generic [ref=e371]: Test Salon njflen
              - paragraph [ref=e372]: Auto-generated test business description njflen
              - generic [ref=e373]:
                - generic [ref=e374]: UTC
                - generic [ref=e375]: USD
            - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD" [ref=e376]:
              - generic [ref=e377]: Test Salon nnnmtw
              - paragraph [ref=e378]: Auto-generated test business description nnnmtw
              - generic [ref=e379]:
                - generic [ref=e380]: UTC
                - generic [ref=e381]: USD
            - button "Test Salon nrc7yx Auto-generated test business description nrc7yx UTC USD" [ref=e382]:
              - generic [ref=e383]: Test Salon nrc7yx
              - paragraph [ref=e384]: Auto-generated test business description nrc7yx
              - generic [ref=e385]:
                - generic [ref=e386]: UTC
                - generic [ref=e387]: USD
            - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD" [ref=e388]:
              - generic [ref=e389]: Test Salon oeux2s
              - paragraph [ref=e390]: Auto-generated test business description oeux2s
              - generic [ref=e391]:
                - generic [ref=e392]: UTC
                - generic [ref=e393]: USD
            - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD" [ref=e394]:
              - generic [ref=e395]: Test Salon orw3o4
              - paragraph [ref=e396]: Auto-generated test business description orw3o4
              - generic [ref=e397]:
                - generic [ref=e398]: UTC
                - generic [ref=e399]: USD
            - button "Test Salon ox1a1r Auto-generated test business description ox1a1r UTC USD" [ref=e400]:
              - generic [ref=e401]: Test Salon ox1a1r
              - paragraph [ref=e402]: Auto-generated test business description ox1a1r
              - generic [ref=e403]:
                - generic [ref=e404]: UTC
                - generic [ref=e405]: USD
            - button "Test Salon p1hgbn Auto-generated test business description p1hgbn UTC USD" [ref=e406]:
              - generic [ref=e407]: Test Salon p1hgbn
              - paragraph [ref=e408]: Auto-generated test business description p1hgbn
              - generic [ref=e409]:
                - generic [ref=e410]: UTC
                - generic [ref=e411]: USD
            - button "Test Salon p27b4v Auto-generated test business description p27b4v UTC USD" [ref=e412]:
              - generic [ref=e413]: Test Salon p27b4v
              - paragraph [ref=e414]: Auto-generated test business description p27b4v
              - generic [ref=e415]:
                - generic [ref=e416]: UTC
                - generic [ref=e417]: USD
            - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD" [ref=e418]:
              - generic [ref=e419]: Test Salon pyoepe
              - paragraph [ref=e420]: Auto-generated test business description pyoepe
              - generic [ref=e421]:
                - generic [ref=e422]: UTC
                - generic [ref=e423]: USD
            - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD" [ref=e424]:
              - generic [ref=e425]: Test Salon qcm18x
              - paragraph [ref=e426]: Auto-generated test business description qcm18x
              - generic [ref=e427]:
                - generic [ref=e428]: UTC
                - generic [ref=e429]: USD
            - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD" [ref=e430]:
              - generic [ref=e431]: Test Salon qlbret
              - paragraph [ref=e432]: Auto-generated test business description qlbret
              - generic [ref=e433]:
                - generic [ref=e434]: UTC
                - generic [ref=e435]: USD
            - button "Test Salon qlz60s Auto-generated test business description qlz60s UTC USD" [ref=e436]:
              - generic [ref=e437]: Test Salon qlz60s
              - paragraph [ref=e438]: Auto-generated test business description qlz60s
              - generic [ref=e439]:
                - generic [ref=e440]: UTC
                - generic [ref=e441]: USD
            - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD" [ref=e442]:
              - generic [ref=e443]: Test Salon qr0hfk
              - paragraph [ref=e444]: Auto-generated test business description qr0hfk
              - generic [ref=e445]:
                - generic [ref=e446]: UTC
                - generic [ref=e447]: USD
            - button "Test Salon qzedc4 Auto-generated test business description qzedc4 UTC USD" [ref=e448]:
              - generic [ref=e449]: Test Salon qzedc4
              - paragraph [ref=e450]: Auto-generated test business description qzedc4
              - generic [ref=e451]:
                - generic [ref=e452]: UTC
                - generic [ref=e453]: USD
            - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD" [ref=e454]:
              - generic [ref=e455]: Test Salon r9cxkb
              - paragraph [ref=e456]: Auto-generated test business description r9cxkb
              - generic [ref=e457]:
                - generic [ref=e458]: UTC
                - generic [ref=e459]: USD
            - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD" [ref=e460]:
              - generic [ref=e461]: Test Salon s7a7st
              - paragraph [ref=e462]: Auto-generated test business description s7a7st
              - generic [ref=e463]:
                - generic [ref=e464]: UTC
                - generic [ref=e465]: USD
            - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD" [ref=e466]:
              - generic [ref=e467]: Test Salon sky7cf
              - paragraph [ref=e468]: Auto-generated test business description sky7cf
              - generic [ref=e469]:
                - generic [ref=e470]: UTC
                - generic [ref=e471]: USD
            - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD" [ref=e472]:
              - generic [ref=e473]: Test Salon t9wjh7
              - paragraph [ref=e474]: Auto-generated test business description t9wjh7
              - generic [ref=e475]:
                - generic [ref=e476]: UTC
                - generic [ref=e477]: USD
            - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD" [ref=e478]:
              - generic [ref=e479]: Test Salon ta5ce7
              - paragraph [ref=e480]: Auto-generated test business description ta5ce7
              - generic [ref=e481]:
                - generic [ref=e482]: UTC
                - generic [ref=e483]: USD
            - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD" [ref=e484]:
              - generic [ref=e485]: Test Salon u0g7lb
              - paragraph [ref=e486]: Auto-generated test business description u0g7lb
              - generic [ref=e487]:
                - generic [ref=e488]: UTC
                - generic [ref=e489]: USD
            - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD" [ref=e490]:
              - generic [ref=e491]: Test Salon u8pzhc
              - paragraph [ref=e492]: Auto-generated test business description u8pzhc
              - generic [ref=e493]:
                - generic [ref=e494]: UTC
                - generic [ref=e495]: USD
            - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD" [ref=e496]:
              - generic [ref=e497]: Test Salon ub3aeu
              - paragraph [ref=e498]: Auto-generated test business description ub3aeu
              - generic [ref=e499]:
                - generic [ref=e500]: UTC
                - generic [ref=e501]: USD
            - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD" [ref=e502]:
              - generic [ref=e503]: Test Salon ui869c
              - paragraph [ref=e504]: Auto-generated test business description ui869c
              - generic [ref=e505]:
                - generic [ref=e506]: UTC
                - generic [ref=e507]: USD
            - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD" [ref=e508]:
              - generic [ref=e509]: Test Salon vamdvm
              - paragraph [ref=e510]: Auto-generated test business description vamdvm
              - generic [ref=e511]:
                - generic [ref=e512]: UTC
                - generic [ref=e513]: USD
            - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD" [ref=e514]:
              - generic [ref=e515]: Test Salon vsxf4h
              - paragraph [ref=e516]: Auto-generated test business description vsxf4h
              - generic [ref=e517]:
                - generic [ref=e518]: UTC
                - generic [ref=e519]: USD
            - button "Test Salon vyvnvm Auto-generated test business description vyvnvm UTC USD" [ref=e520]:
              - generic [ref=e521]: Test Salon vyvnvm
              - paragraph [ref=e522]: Auto-generated test business description vyvnvm
              - generic [ref=e523]:
                - generic [ref=e524]: UTC
                - generic [ref=e525]: USD
            - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD" [ref=e526]:
              - generic [ref=e527]: Test Salon wpsv41
              - paragraph [ref=e528]: Auto-generated test business description wpsv41
              - generic [ref=e529]:
                - generic [ref=e530]: UTC
                - generic [ref=e531]: USD
            - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD" [ref=e532]:
              - generic [ref=e533]: Test Salon wqwz95
              - paragraph [ref=e534]: Auto-generated test business description wqwz95
              - generic [ref=e535]:
                - generic [ref=e536]: UTC
                - generic [ref=e537]: USD
            - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD" [ref=e538]:
              - generic [ref=e539]: Test Salon x4gtj1
              - paragraph [ref=e540]: Auto-generated test business description x4gtj1
              - generic [ref=e541]:
                - generic [ref=e542]: UTC
                - generic [ref=e543]: USD
            - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD" [ref=e544]:
              - generic [ref=e545]: Test Salon x9lli8
              - paragraph [ref=e546]: Auto-generated test business description x9lli8
              - generic [ref=e547]:
                - generic [ref=e548]: UTC
                - generic [ref=e549]: USD
            - button "Test Salon xoymd5 Auto-generated test business description xoymd5 UTC USD" [ref=e550]:
              - generic [ref=e551]: Test Salon xoymd5
              - paragraph [ref=e552]: Auto-generated test business description xoymd5
              - generic [ref=e553]:
                - generic [ref=e554]: UTC
                - generic [ref=e555]: USD
            - button "Test Salon xvqmlv UTC USD" [ref=e556]:
              - generic [ref=e557]: Test Salon xvqmlv
              - generic [ref=e558]:
                - generic [ref=e559]: UTC
                - generic [ref=e560]: USD
            - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD" [ref=e561]:
              - generic [ref=e562]: Test Salon ztn2hy
              - paragraph [ref=e563]: Auto-generated test business description ztn2hy
              - generic [ref=e564]:
                - generic [ref=e565]: UTC
                - generic [ref=e566]: USD
            - button "Zen Spa UTC USD" [ref=e567]:
              - generic [ref=e568]: Zen Spa
              - generic [ref=e569]:
                - generic [ref=e570]: UTC
                - generic [ref=e571]: USD
            - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD" [ref=e572]:
              - generic [ref=e573]: chingcho
              - paragraph [ref=e574]: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
              - generic [ref=e575]:
                - generic [ref=e576]: UTC
                - generic [ref=e577]: USD
        - generic [ref=e578]:
          - generic [ref=e579]:
            - heading "Agenda" [level=3] [ref=e580]
            - paragraph [ref=e581]: No address listed · No phone
          - separator [ref=e582]
          - generic [ref=e583]:
            - heading "2. Select Service" [level=4] [ref=e584]
            - button "Standard Appointment 50.00 USD General appointment service ⏱️ 30 mins" [ref=e586]:
              - generic [ref=e587]:
                - generic [ref=e588]: Standard Appointment
                - generic [ref=e589]: 50.00 USD
              - paragraph [ref=e590]: General appointment service
              - generic [ref=e591]: ⏱️ 30 mins
          - generic [ref=e592]:
            - generic [ref=e593]:
              - generic [ref=e594]: Select Date
              - button "📅 Sun, Aug 23, 2026 ▼" [ref=e596] [cursor=pointer]:
                - generic [ref=e597]:
                  - generic [ref=e598]: 📅
                  - generic [ref=e599]: Sun, Aug 23, 2026
                - generic [ref=e600]: ▼
            - generic [ref=e601]:
              - generic [ref=e602]: Preferred Staff (Optional)
              - combobox [ref=e603]:
                - option "Any available staff member" [selected]
                - option "Primary Specialist"
          - generic [ref=e604]:
            - generic [ref=e606]:
              - heading "3. Available Slots" [level=4] [ref=e607]
              - generic [ref=e608]: All times shown in business timezone (UTC)
            - paragraph [ref=e609]: No slots available for this date/service.
    - contentinfo [ref=e610]:
      - generic [ref=e611]:
        - generic [ref=e612]:
          - generic [ref=e613]: "Y"
          - generic [ref=e614]: Yarivo Appointments
          - generic [ref=e615]: ·
          - generic [ref=e616]: yarivo.com
        - generic [ref=e617]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=e623] [cursor=pointer]
  - alert [ref=e629]
```

# Test source

```ts
  1   | /**
  2   |  * Edge Case Test Suite: Public Booking Scenarios & Boundary Values
  3   |  * Tests slot race conditions, Unicode/Emoji names, invalid inputs, and missing slot guards.
  4   |  */
  5   | 
  6   | const { test, expect } = require('../../fixtures/base-fixture');
  7   | const { generateUniqueBusiness, generateUniqueCustomer } = require('../../utils/string-helper');
  8   | const { specialAndUnicodeStrings } = require('../../test-data/security-data');
  9   | const { textNotesBoundaries } = require('../../test-data/boundary-data');
  10  | const { invalidEmails } = require('../../test-data/invalid-data');
  11  | 
  12  | test.describe('@edge Public Booking Edge Cases & Boundaries', () => {
  13  |   let createdBusiness;
  14  | 
  15  |   test.beforeEach(async ({ apiClient }) => {
  16  |     createdBusiness = generateUniqueBusiness();
  17  |     const res = await apiClient.registerBusiness(createdBusiness);
  18  |     expect(res.ok).toBeTruthy();
  19  |   });
  20  | 
  21  |   test('should reject booking when no time slot is selected', async ({
  22  |     publicBookingPage,
  23  |   }) => {
  24  |     await publicBookingPage.goto('/');
  25  |     await publicBookingPage.selectBusinessByName(createdBusiness.name);
  26  | 
  27  |     // Fill form without selecting a slot
  28  |     const customer = generateUniqueCustomer();
  29  |     await publicBookingPage.fillCustomerDetails(customer);
  30  |     await publicBookingPage.submitBooking();
  31  | 
  32  |     // Verify slot validation error
  33  |     await publicBookingPage.expectFieldError('Please choose an appointment time slot');
  34  |   });
  35  | 
  36  |   test('should handle customer names with Unicode, Accents, and Emojis', async ({
  37  |     page,
  38  |     publicBookingPage,
  39  |   }) => {
  40  |     await publicBookingPage.goto('/');
  41  |     await publicBookingPage.selectBusinessByName(createdBusiness.name);
  42  |     await publicBookingPage.selectFirstAvailableSlot();
  43  | 
  44  |     const unicodeCustomer = {
  45  |       name: specialAndUnicodeStrings.emojiName,
  46  |       email: 'unicode.client@example.com',
  47  |       phone: '+1 555-0199',
  48  |       notes: specialAndUnicodeStrings.accentsAndUmlauts,
  49  |     };
  50  | 
  51  |     await publicBookingPage.fillCustomerDetails(unicodeCustomer);
  52  |     await publicBookingPage.submitBooking();
  53  | 
  54  |     await publicBookingPage.expectBookingSuccess();
  55  |     await expect(page.getByText(specialAndUnicodeStrings.emojiName)).toBeVisible();
  56  |   });
  57  | 
  58  |   test('should handle large boundary text notes gracefully', async ({
  59  |     publicBookingPage,
  60  |   }) => {
  61  |     await publicBookingPage.goto('/');
  62  |     await publicBookingPage.selectBusinessByName(createdBusiness.name);
  63  |     await publicBookingPage.selectFirstAvailableSlot();
  64  | 
  65  |     const customer = {
  66  |       name: 'Boundary Tester',
  67  |       email: 'boundary@example.com',
  68  |       notes: textNotesBoundaries.longNotes,
  69  |     };
  70  | 
  71  |     await publicBookingPage.fillCustomerDetails(customer);
  72  |     await publicBookingPage.submitBooking();
  73  |     await publicBookingPage.expectBookingSuccess();
  74  |   });
  75  | 
  76  |   test('should show inline validation errors for invalid email formats', async ({
  77  |     publicBookingPage,
  78  |   }) => {
  79  |     await publicBookingPage.goto('/');
  80  |     await publicBookingPage.selectBusinessByName(createdBusiness.name);
  81  |     await publicBookingPage.selectFirstAvailableSlot();
  82  | 
  83  |     for (const invalidEmail of invalidEmails.slice(0, 3)) {
> 84  |       await publicBookingPage.emailInput.fill(invalidEmail);
      |                                          ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  85  |       await publicBookingPage.submitBooking();
  86  |       await publicBookingPage.expectFieldError('valid email');
  87  |     }
  88  |   });
  89  | 
  90  |   test('should handle double-booking conflict (409) gracefully with error message', async ({
  91  |     page,
  92  |     publicBookingPage,
  93  |     apiClient,
  94  |   }) => {
  95  |     // 1. Fetch available slots via API
  96  |     const pubBizRes = await apiClient.request(`/business/public/${createdBusiness.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
  97  |     const slug = pubBizRes.data.slug;
  98  |     const srvRes = await apiClient.request(`/business/public/${slug}/services`);
  99  |     const service = srvRes.data[0];
  100 | 
  101 |     const today = new Date().toISOString().split('T')[0];
  102 |     const slotsRes = await apiClient.getPublicSlots(slug, service.id, today);
  103 |     const targetSlot = slotsRes.data[0];
  104 | 
  105 |     // 2. Open UI and select target slot
  106 |     await publicBookingPage.goto('/');
  107 |     await publicBookingPage.selectBusinessByName(createdBusiness.name);
  108 |     await publicBookingPage.selectFirstAvailableSlot();
  109 |     await publicBookingPage.fillCustomerDetails({
  110 |       name: 'UI Customer',
  111 |       email: 'ui.customer@test.com',
  112 |     });
  113 | 
  114 |     // 3. Concurrently book this exact slot via API in the background (simulating another user grabbing the slot first)
  115 |     await apiClient.bookAppointment(slug, {
  116 |       name: 'Fast API Booker',
  117 |       email: 'fast@test.com',
  118 |       serviceId: service.id,
  119 |       staffId: targetSlot.staff_id,
  120 |       startTime: targetSlot.start_time,
  121 |     });
  122 | 
  123 |     // 4. Now click submit in the UI
  124 |     await publicBookingPage.submitBooking();
  125 | 
  126 |     // 5. Verify 409 conflict error is captured and displayed
  127 |     await publicBookingPage.expectErrorMessage(/already booked|conflict|failed/i);
  128 |   });
  129 | });
  130 | 
```