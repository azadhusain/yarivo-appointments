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
          - button "Dashboard" [ref=f1e14]
          - button "+ New Business" [ref=f1e15]
          - button "Logout" [ref=f1e16]
    - main [ref=f1e17]:
      - generic [ref=f1e18]:
        - generic [ref=f1e19]:
          - heading "Book an Appointment" [level=1] [ref=f1e20]
          - paragraph [ref=f1e21]: Select a business, choose your service, pick a date, and reserve your slot instantly.
        - generic [ref=f1e22]:
          - heading "1. Select Business" [level=2] [ref=f1e23]
          - generic [ref=f1e24]:
            - 'button "Agenda Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips: UTC USD" [ref=f1e25]':
              - generic [ref=f1e26]: Agenda
              - paragraph [ref=f1e27]: "Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips:"
              - generic [ref=f1e28]:
                - generic [ref=f1e29]: UTC
                - generic [ref=f1e30]: USD
            - button "Apex Salon & Spa UTC USD" [ref=f1e31]:
              - generic [ref=f1e32]: Apex Salon & Spa
              - generic [ref=f1e33]:
                - generic [ref=f1e34]: UTC
                - generic [ref=f1e35]: USD
            - button "Azad Asia/Calcutta USD" [ref=f1e36]:
              - generic [ref=f1e37]: Azad
              - generic [ref=f1e38]:
                - generic [ref=f1e39]: Asia/Calcutta
                - generic [ref=f1e40]: USD
            - button "Crown Salon UTC USD" [ref=f1e41]:
              - generic [ref=f1e42]: Crown Salon
              - generic [ref=f1e43]:
                - generic [ref=f1e44]: UTC
                - generic [ref=f1e45]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e46]:
              - generic [ref=f1e47]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e48]:
                - generic [ref=f1e49]: UTC
                - generic [ref=f1e50]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e51]:
              - generic [ref=f1e52]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e53]:
                - generic [ref=f1e54]: UTC
                - generic [ref=f1e55]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e56]:
              - generic [ref=f1e57]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e58]:
                - generic [ref=f1e59]: UTC
                - generic [ref=f1e60]: USD
            - button "Salon <script>alert(\"XSS\")</script> UTC USD" [ref=f1e61]:
              - generic [ref=f1e62]: Salon <script>alert("XSS")</script>
              - generic [ref=f1e63]:
                - generic [ref=f1e64]: UTC
                - generic [ref=f1e65]: USD
            - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD" [ref=f1e66]:
              - generic [ref=f1e67]: Test Salon 0amdq1
              - paragraph [ref=f1e68]: Auto-generated test business description 0amdq1
              - generic [ref=f1e69]:
                - generic [ref=f1e70]: UTC
                - generic [ref=f1e71]: USD
            - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD" [ref=f1e72]:
              - generic [ref=f1e73]: Test Salon 0bcq40
              - paragraph [ref=f1e74]: Auto-generated test business description 0bcq40
              - generic [ref=f1e75]:
                - generic [ref=f1e76]: UTC
                - generic [ref=f1e77]: USD
            - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD" [ref=f1e78]:
              - generic [ref=f1e79]: Test Salon 1bip1q
              - paragraph [ref=f1e80]: Auto-generated test business description 1bip1q
              - generic [ref=f1e81]:
                - generic [ref=f1e82]: UTC
                - generic [ref=f1e83]: USD
            - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD" [ref=f1e84]:
              - generic [ref=f1e85]: Test Salon 1gtheb
              - paragraph [ref=f1e86]: Auto-generated test business description 1gtheb
              - generic [ref=f1e87]:
                - generic [ref=f1e88]: UTC
                - generic [ref=f1e89]: USD
            - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD" [ref=f1e90]:
              - generic [ref=f1e91]: Test Salon 1hiobw
              - paragraph [ref=f1e92]: Auto-generated test business description 1hiobw
              - generic [ref=f1e93]:
                - generic [ref=f1e94]: UTC
                - generic [ref=f1e95]: USD
            - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD" [ref=f1e96]:
              - generic [ref=f1e97]: Test Salon 35kobd
              - paragraph [ref=f1e98]: Auto-generated test business description 35kobd
              - generic [ref=f1e99]:
                - generic [ref=f1e100]: UTC
                - generic [ref=f1e101]: USD
            - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD" [ref=f1e102]:
              - generic [ref=f1e103]: Test Salon 3kcg5c
              - paragraph [ref=f1e104]: Auto-generated test business description 3kcg5c
              - generic [ref=f1e105]:
                - generic [ref=f1e106]: UTC
                - generic [ref=f1e107]: USD
            - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD" [ref=f1e108]:
              - generic [ref=f1e109]: Test Salon 4odkr7
              - paragraph [ref=f1e110]: Auto-generated test business description 4odkr7
              - generic [ref=f1e111]:
                - generic [ref=f1e112]: UTC
                - generic [ref=f1e113]: USD
            - button "Test Salon 4xohph Auto-generated test business description 4xohph UTC USD" [ref=f1e114]:
              - generic [ref=f1e115]: Test Salon 4xohph
              - paragraph [ref=f1e116]: Auto-generated test business description 4xohph
              - generic [ref=f1e117]:
                - generic [ref=f1e118]: UTC
                - generic [ref=f1e119]: USD
            - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD" [ref=f1e120]:
              - generic [ref=f1e121]: Test Salon 5kpeld
              - paragraph [ref=f1e122]: Auto-generated test business description 5kpeld
              - generic [ref=f1e123]:
                - generic [ref=f1e124]: UTC
                - generic [ref=f1e125]: USD
            - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD" [ref=f1e126]:
              - generic [ref=f1e127]: Test Salon 6xqwra
              - paragraph [ref=f1e128]: Auto-generated test business description 6xqwra
              - generic [ref=f1e129]:
                - generic [ref=f1e130]: UTC
                - generic [ref=f1e131]: USD
            - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD" [ref=f1e132]:
              - generic [ref=f1e133]: Test Salon 76cxtv
              - paragraph [ref=f1e134]: Auto-generated test business description 76cxtv
              - generic [ref=f1e135]:
                - generic [ref=f1e136]: UTC
                - generic [ref=f1e137]: USD
            - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD" [ref=f1e138]:
              - generic [ref=f1e139]: Test Salon 7bit9w
              - paragraph [ref=f1e140]: Auto-generated test business description 7bit9w
              - generic [ref=f1e141]:
                - generic [ref=f1e142]: UTC
                - generic [ref=f1e143]: USD
            - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD" [ref=f1e144]:
              - generic [ref=f1e145]: Test Salon 7nf9hv
              - paragraph [ref=f1e146]: Auto-generated test business description 7nf9hv
              - generic [ref=f1e147]:
                - generic [ref=f1e148]: UTC
                - generic [ref=f1e149]: USD
            - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD" [ref=f1e150]:
              - generic [ref=f1e151]: Test Salon 7o4pn7
              - paragraph [ref=f1e152]: Auto-generated test business description 7o4pn7
              - generic [ref=f1e153]:
                - generic [ref=f1e154]: UTC
                - generic [ref=f1e155]: USD
            - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD" [ref=f1e156]:
              - generic [ref=f1e157]: Test Salon 8h9i5t
              - paragraph [ref=f1e158]: Auto-generated test business description 8h9i5t
              - generic [ref=f1e159]:
                - generic [ref=f1e160]: UTC
                - generic [ref=f1e161]: USD
            - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD" [ref=f1e162]:
              - generic [ref=f1e163]: Test Salon a68qlk
              - paragraph [ref=f1e164]: Auto-generated test business description a68qlk
              - generic [ref=f1e165]:
                - generic [ref=f1e166]: UTC
                - generic [ref=f1e167]: USD
            - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD" [ref=f1e168]:
              - generic [ref=f1e169]: Test Salon asymmy
              - paragraph [ref=f1e170]: Auto-generated test business description asymmy
              - generic [ref=f1e171]:
                - generic [ref=f1e172]: UTC
                - generic [ref=f1e173]: USD
            - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD" [ref=f1e174]:
              - generic [ref=f1e175]: Test Salon atz1m3
              - paragraph [ref=f1e176]: Auto-generated test business description atz1m3
              - generic [ref=f1e177]:
                - generic [ref=f1e178]: UTC
                - generic [ref=f1e179]: USD
            - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD" [ref=f1e180]:
              - generic [ref=f1e181]: Test Salon b76urd
              - paragraph [ref=f1e182]: Auto-generated test business description b76urd
              - generic [ref=f1e183]:
                - generic [ref=f1e184]: UTC
                - generic [ref=f1e185]: USD
            - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD" [ref=f1e186]:
              - generic [ref=f1e187]: Test Salon btnwca
              - paragraph [ref=f1e188]: Auto-generated test business description btnwca
              - generic [ref=f1e189]:
                - generic [ref=f1e190]: UTC
                - generic [ref=f1e191]: USD
            - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD" [ref=f1e192]:
              - generic [ref=f1e193]: Test Salon c0uqdl
              - paragraph [ref=f1e194]: Auto-generated test business description c0uqdl
              - generic [ref=f1e195]:
                - generic [ref=f1e196]: UTC
                - generic [ref=f1e197]: USD
            - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD" [ref=f1e198]:
              - generic [ref=f1e199]: Test Salon cemiq4
              - paragraph [ref=f1e200]: Auto-generated test business description cemiq4
              - generic [ref=f1e201]:
                - generic [ref=f1e202]: UTC
                - generic [ref=f1e203]: USD
            - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD" [ref=f1e204]:
              - generic [ref=f1e205]: Test Salon cs0sk6
              - paragraph [ref=f1e206]: Auto-generated test business description cs0sk6
              - generic [ref=f1e207]:
                - generic [ref=f1e208]: UTC
                - generic [ref=f1e209]: USD
            - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD" [ref=f1e210]:
              - generic [ref=f1e211]: Test Salon d2s8sx
              - paragraph [ref=f1e212]: Auto-generated test business description d2s8sx
              - generic [ref=f1e213]:
                - generic [ref=f1e214]: UTC
                - generic [ref=f1e215]: USD
            - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD" [ref=f1e216]:
              - generic [ref=f1e217]: Test Salon egni33
              - paragraph [ref=f1e218]: Auto-generated test business description egni33
              - generic [ref=f1e219]:
                - generic [ref=f1e220]: UTC
                - generic [ref=f1e221]: USD
            - button "Test Salon eog81f Auto-generated test business description eog81f UTC USD" [ref=f1e222]:
              - generic [ref=f1e223]: Test Salon eog81f
              - paragraph [ref=f1e224]: Auto-generated test business description eog81f
              - generic [ref=f1e225]:
                - generic [ref=f1e226]: UTC
                - generic [ref=f1e227]: USD
            - button "Test Salon esyzer Auto-generated test business description esyzer UTC USD" [ref=f1e228]:
              - generic [ref=f1e229]: Test Salon esyzer
              - paragraph [ref=f1e230]: Auto-generated test business description esyzer
              - generic [ref=f1e231]:
                - generic [ref=f1e232]: UTC
                - generic [ref=f1e233]: USD
            - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD" [ref=f1e234]:
              - generic [ref=f1e235]: Test Salon fnk1tt
              - paragraph [ref=f1e236]: Auto-generated test business description fnk1tt
              - generic [ref=f1e237]:
                - generic [ref=f1e238]: UTC
                - generic [ref=f1e239]: USD
            - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD" [ref=f1e240]:
              - generic [ref=f1e241]: Test Salon fwgmjd
              - paragraph [ref=f1e242]: Auto-generated test business description fwgmjd
              - generic [ref=f1e243]:
                - generic [ref=f1e244]: UTC
                - generic [ref=f1e245]: USD
            - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD" [ref=f1e246]:
              - generic [ref=f1e247]: Test Salon gi47ns
              - paragraph [ref=f1e248]: Auto-generated test business description gi47ns
              - generic [ref=f1e249]:
                - generic [ref=f1e250]: UTC
                - generic [ref=f1e251]: USD
            - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD" [ref=f1e252]:
              - generic [ref=f1e253]: Test Salon gl6fqe
              - paragraph [ref=f1e254]: Auto-generated test business description gl6fqe
              - generic [ref=f1e255]:
                - generic [ref=f1e256]: UTC
                - generic [ref=f1e257]: USD
            - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD" [ref=f1e258]:
              - generic [ref=f1e259]: Test Salon gl7ea7
              - paragraph [ref=f1e260]: Auto-generated test business description gl7ea7
              - generic [ref=f1e261]:
                - generic [ref=f1e262]: UTC
                - generic [ref=f1e263]: USD
            - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD" [ref=f1e264]:
              - generic [ref=f1e265]: Test Salon hxzb30
              - paragraph [ref=f1e266]: Auto-generated test business description hxzb30
              - generic [ref=f1e267]:
                - generic [ref=f1e268]: UTC
                - generic [ref=f1e269]: USD
            - button "Test Salon igp24q Auto-generated test business description igp24q UTC USD" [ref=f1e270]:
              - generic [ref=f1e271]: Test Salon igp24q
              - paragraph [ref=f1e272]: Auto-generated test business description igp24q
              - generic [ref=f1e273]:
                - generic [ref=f1e274]: UTC
                - generic [ref=f1e275]: USD
            - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD" [ref=f1e276]:
              - generic [ref=f1e277]: Test Salon ls8uew
              - paragraph [ref=f1e278]: Auto-generated test business description ls8uew
              - generic [ref=f1e279]:
                - generic [ref=f1e280]: UTC
                - generic [ref=f1e281]: USD
            - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD" [ref=f1e282]:
              - generic [ref=f1e283]: Test Salon lxdrvs
              - paragraph [ref=f1e284]: Auto-generated test business description lxdrvs
              - generic [ref=f1e285]:
                - generic [ref=f1e286]: UTC
                - generic [ref=f1e287]: USD
            - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD" [ref=f1e288]:
              - generic [ref=f1e289]: Test Salon niqqre
              - paragraph [ref=f1e290]: Auto-generated test business description niqqre
              - generic [ref=f1e291]:
                - generic [ref=f1e292]: UTC
                - generic [ref=f1e293]: USD
            - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD" [ref=f1e294]:
              - generic [ref=f1e295]: Test Salon nnnmtw
              - paragraph [ref=f1e296]: Auto-generated test business description nnnmtw
              - generic [ref=f1e297]:
                - generic [ref=f1e298]: UTC
                - generic [ref=f1e299]: USD
            - button "Test Salon nrc7yx Auto-generated test business description nrc7yx UTC USD" [ref=f1e300]:
              - generic [ref=f1e301]: Test Salon nrc7yx
              - paragraph [ref=f1e302]: Auto-generated test business description nrc7yx
              - generic [ref=f1e303]:
                - generic [ref=f1e304]: UTC
                - generic [ref=f1e305]: USD
            - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD" [ref=f1e306]:
              - generic [ref=f1e307]: Test Salon oeux2s
              - paragraph [ref=f1e308]: Auto-generated test business description oeux2s
              - generic [ref=f1e309]:
                - generic [ref=f1e310]: UTC
                - generic [ref=f1e311]: USD
            - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD" [ref=f1e312]:
              - generic [ref=f1e313]: Test Salon orw3o4
              - paragraph [ref=f1e314]: Auto-generated test business description orw3o4
              - generic [ref=f1e315]:
                - generic [ref=f1e316]: UTC
                - generic [ref=f1e317]: USD
            - button "Test Salon ox1a1r Auto-generated test business description ox1a1r UTC USD" [ref=f1e318]:
              - generic [ref=f1e319]: Test Salon ox1a1r
              - paragraph [ref=f1e320]: Auto-generated test business description ox1a1r
              - generic [ref=f1e321]:
                - generic [ref=f1e322]: UTC
                - generic [ref=f1e323]: USD
            - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD" [ref=f1e324]:
              - generic [ref=f1e325]: Test Salon pyoepe
              - paragraph [ref=f1e326]: Auto-generated test business description pyoepe
              - generic [ref=f1e327]:
                - generic [ref=f1e328]: UTC
                - generic [ref=f1e329]: USD
            - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD" [ref=f1e330]:
              - generic [ref=f1e331]: Test Salon qcm18x
              - paragraph [ref=f1e332]: Auto-generated test business description qcm18x
              - generic [ref=f1e333]:
                - generic [ref=f1e334]: UTC
                - generic [ref=f1e335]: USD
            - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD" [ref=f1e336]:
              - generic [ref=f1e337]: Test Salon qlbret
              - paragraph [ref=f1e338]: Auto-generated test business description qlbret
              - generic [ref=f1e339]:
                - generic [ref=f1e340]: UTC
                - generic [ref=f1e341]: USD
            - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD" [ref=f1e342]:
              - generic [ref=f1e343]: Test Salon qr0hfk
              - paragraph [ref=f1e344]: Auto-generated test business description qr0hfk
              - generic [ref=f1e345]:
                - generic [ref=f1e346]: UTC
                - generic [ref=f1e347]: USD
            - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD" [ref=f1e348]:
              - generic [ref=f1e349]: Test Salon r9cxkb
              - paragraph [ref=f1e350]: Auto-generated test business description r9cxkb
              - generic [ref=f1e351]:
                - generic [ref=f1e352]: UTC
                - generic [ref=f1e353]: USD
            - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD" [ref=f1e354]:
              - generic [ref=f1e355]: Test Salon s7a7st
              - paragraph [ref=f1e356]: Auto-generated test business description s7a7st
              - generic [ref=f1e357]:
                - generic [ref=f1e358]: UTC
                - generic [ref=f1e359]: USD
            - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD" [ref=f1e360]:
              - generic [ref=f1e361]: Test Salon sky7cf
              - paragraph [ref=f1e362]: Auto-generated test business description sky7cf
              - generic [ref=f1e363]:
                - generic [ref=f1e364]: UTC
                - generic [ref=f1e365]: USD
            - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD" [ref=f1e366]:
              - generic [ref=f1e367]: Test Salon t9wjh7
              - paragraph [ref=f1e368]: Auto-generated test business description t9wjh7
              - generic [ref=f1e369]:
                - generic [ref=f1e370]: UTC
                - generic [ref=f1e371]: USD
            - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD" [ref=f1e372]:
              - generic [ref=f1e373]: Test Salon ta5ce7
              - paragraph [ref=f1e374]: Auto-generated test business description ta5ce7
              - generic [ref=f1e375]:
                - generic [ref=f1e376]: UTC
                - generic [ref=f1e377]: USD
            - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD" [ref=f1e378]:
              - generic [ref=f1e379]: Test Salon u0g7lb
              - paragraph [ref=f1e380]: Auto-generated test business description u0g7lb
              - generic [ref=f1e381]:
                - generic [ref=f1e382]: UTC
                - generic [ref=f1e383]: USD
            - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD" [ref=f1e384]:
              - generic [ref=f1e385]: Test Salon u8pzhc
              - paragraph [ref=f1e386]: Auto-generated test business description u8pzhc
              - generic [ref=f1e387]:
                - generic [ref=f1e388]: UTC
                - generic [ref=f1e389]: USD
            - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD" [ref=f1e390]:
              - generic [ref=f1e391]: Test Salon ub3aeu
              - paragraph [ref=f1e392]: Auto-generated test business description ub3aeu
              - generic [ref=f1e393]:
                - generic [ref=f1e394]: UTC
                - generic [ref=f1e395]: USD
            - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD" [ref=f1e396]:
              - generic [ref=f1e397]: Test Salon ui869c
              - paragraph [ref=f1e398]: Auto-generated test business description ui869c
              - generic [ref=f1e399]:
                - generic [ref=f1e400]: UTC
                - generic [ref=f1e401]: USD
            - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD" [ref=f1e402]:
              - generic [ref=f1e403]: Test Salon vamdvm
              - paragraph [ref=f1e404]: Auto-generated test business description vamdvm
              - generic [ref=f1e405]:
                - generic [ref=f1e406]: UTC
                - generic [ref=f1e407]: USD
            - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD" [ref=f1e408]:
              - generic [ref=f1e409]: Test Salon vsxf4h
              - paragraph [ref=f1e410]: Auto-generated test business description vsxf4h
              - generic [ref=f1e411]:
                - generic [ref=f1e412]: UTC
                - generic [ref=f1e413]: USD
            - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD" [ref=f1e414]:
              - generic [ref=f1e415]: Test Salon wpsv41
              - paragraph [ref=f1e416]: Auto-generated test business description wpsv41
              - generic [ref=f1e417]:
                - generic [ref=f1e418]: UTC
                - generic [ref=f1e419]: USD
            - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD" [ref=f1e420]:
              - generic [ref=f1e421]: Test Salon wqwz95
              - paragraph [ref=f1e422]: Auto-generated test business description wqwz95
              - generic [ref=f1e423]:
                - generic [ref=f1e424]: UTC
                - generic [ref=f1e425]: USD
            - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD" [ref=f1e426]:
              - generic [ref=f1e427]: Test Salon x4gtj1
              - paragraph [ref=f1e428]: Auto-generated test business description x4gtj1
              - generic [ref=f1e429]:
                - generic [ref=f1e430]: UTC
                - generic [ref=f1e431]: USD
            - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD" [ref=f1e432]:
              - generic [ref=f1e433]: Test Salon x9lli8
              - paragraph [ref=f1e434]: Auto-generated test business description x9lli8
              - generic [ref=f1e435]:
                - generic [ref=f1e436]: UTC
                - generic [ref=f1e437]: USD
            - button "Test Salon xvqmlv UTC USD" [ref=f1e438]:
              - generic [ref=f1e439]: Test Salon xvqmlv
              - generic [ref=f1e440]:
                - generic [ref=f1e441]: UTC
                - generic [ref=f1e442]: USD
            - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD" [ref=f1e443]:
              - generic [ref=f1e444]: Test Salon ztn2hy
              - paragraph [ref=f1e445]: Auto-generated test business description ztn2hy
              - generic [ref=f1e446]:
                - generic [ref=f1e447]: UTC
                - generic [ref=f1e448]: USD
            - button "Zen Spa UTC USD" [ref=f1e449]:
              - generic [ref=f1e450]: Zen Spa
              - generic [ref=f1e451]:
                - generic [ref=f1e452]: UTC
                - generic [ref=f1e453]: USD
            - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD" [ref=f1e454]:
              - generic [ref=f1e455]: chingcho
              - paragraph [ref=f1e456]: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
              - generic [ref=f1e457]:
                - generic [ref=f1e458]: UTC
                - generic [ref=f1e459]: USD
    - contentinfo [ref=f1e460]:
      - generic [ref=f1e461]:
        - generic [ref=f1e462]:
          - generic [ref=f1e463]: "Y"
          - generic [ref=f1e464]: Yarivo Appointments
          - generic [ref=f1e465]: ·
          - generic [ref=f1e466]: yarivo.com
        - generic [ref=f1e467]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=f1e473] [cursor=pointer]
  - alert [ref=f1e477]
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