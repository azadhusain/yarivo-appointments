# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge\edge-deletion-constraints.spec.js >> @edge Deletion Constraint Safeguards >> should block deletion of a service with active confirmed appointments
- Location: tests\edge\edge-deletion-constraints.spec.js:11:3

# Error details

```
TypeError: Cannot read properties of undefined (reading 'staff_id')
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
            - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD" [ref=f1e61]:
              - generic [ref=f1e62]: Test Salon 0amdq1
              - paragraph [ref=f1e63]: Auto-generated test business description 0amdq1
              - generic [ref=f1e64]:
                - generic [ref=f1e65]: UTC
                - generic [ref=f1e66]: USD
            - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD" [ref=f1e67]:
              - generic [ref=f1e68]: Test Salon 0bcq40
              - paragraph [ref=f1e69]: Auto-generated test business description 0bcq40
              - generic [ref=f1e70]:
                - generic [ref=f1e71]: UTC
                - generic [ref=f1e72]: USD
            - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD" [ref=f1e73]:
              - generic [ref=f1e74]: Test Salon 1bip1q
              - paragraph [ref=f1e75]: Auto-generated test business description 1bip1q
              - generic [ref=f1e76]:
                - generic [ref=f1e77]: UTC
                - generic [ref=f1e78]: USD
            - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD" [ref=f1e79]:
              - generic [ref=f1e80]: Test Salon 1gtheb
              - paragraph [ref=f1e81]: Auto-generated test business description 1gtheb
              - generic [ref=f1e82]:
                - generic [ref=f1e83]: UTC
                - generic [ref=f1e84]: USD
            - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD" [ref=f1e85]:
              - generic [ref=f1e86]: Test Salon 1hiobw
              - paragraph [ref=f1e87]: Auto-generated test business description 1hiobw
              - generic [ref=f1e88]:
                - generic [ref=f1e89]: UTC
                - generic [ref=f1e90]: USD
            - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD" [ref=f1e91]:
              - generic [ref=f1e92]: Test Salon 35kobd
              - paragraph [ref=f1e93]: Auto-generated test business description 35kobd
              - generic [ref=f1e94]:
                - generic [ref=f1e95]: UTC
                - generic [ref=f1e96]: USD
            - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD" [ref=f1e97]:
              - generic [ref=f1e98]: Test Salon 3kcg5c
              - paragraph [ref=f1e99]: Auto-generated test business description 3kcg5c
              - generic [ref=f1e100]:
                - generic [ref=f1e101]: UTC
                - generic [ref=f1e102]: USD
            - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD" [ref=f1e103]:
              - generic [ref=f1e104]: Test Salon 4odkr7
              - paragraph [ref=f1e105]: Auto-generated test business description 4odkr7
              - generic [ref=f1e106]:
                - generic [ref=f1e107]: UTC
                - generic [ref=f1e108]: USD
            - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD" [ref=f1e109]:
              - generic [ref=f1e110]: Test Salon 5kpeld
              - paragraph [ref=f1e111]: Auto-generated test business description 5kpeld
              - generic [ref=f1e112]:
                - generic [ref=f1e113]: UTC
                - generic [ref=f1e114]: USD
            - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD" [ref=f1e115]:
              - generic [ref=f1e116]: Test Salon 6xqwra
              - paragraph [ref=f1e117]: Auto-generated test business description 6xqwra
              - generic [ref=f1e118]:
                - generic [ref=f1e119]: UTC
                - generic [ref=f1e120]: USD
            - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD" [ref=f1e121]:
              - generic [ref=f1e122]: Test Salon 76cxtv
              - paragraph [ref=f1e123]: Auto-generated test business description 76cxtv
              - generic [ref=f1e124]:
                - generic [ref=f1e125]: UTC
                - generic [ref=f1e126]: USD
            - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD" [ref=f1e127]:
              - generic [ref=f1e128]: Test Salon 7bit9w
              - paragraph [ref=f1e129]: Auto-generated test business description 7bit9w
              - generic [ref=f1e130]:
                - generic [ref=f1e131]: UTC
                - generic [ref=f1e132]: USD
            - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD" [ref=f1e133]:
              - generic [ref=f1e134]: Test Salon 7nf9hv
              - paragraph [ref=f1e135]: Auto-generated test business description 7nf9hv
              - generic [ref=f1e136]:
                - generic [ref=f1e137]: UTC
                - generic [ref=f1e138]: USD
            - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD" [ref=f1e139]:
              - generic [ref=f1e140]: Test Salon 7o4pn7
              - paragraph [ref=f1e141]: Auto-generated test business description 7o4pn7
              - generic [ref=f1e142]:
                - generic [ref=f1e143]: UTC
                - generic [ref=f1e144]: USD
            - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD" [ref=f1e145]:
              - generic [ref=f1e146]: Test Salon 8h9i5t
              - paragraph [ref=f1e147]: Auto-generated test business description 8h9i5t
              - generic [ref=f1e148]:
                - generic [ref=f1e149]: UTC
                - generic [ref=f1e150]: USD
            - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD" [ref=f1e151]:
              - generic [ref=f1e152]: Test Salon a68qlk
              - paragraph [ref=f1e153]: Auto-generated test business description a68qlk
              - generic [ref=f1e154]:
                - generic [ref=f1e155]: UTC
                - generic [ref=f1e156]: USD
            - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD" [ref=f1e157]:
              - generic [ref=f1e158]: Test Salon asymmy
              - paragraph [ref=f1e159]: Auto-generated test business description asymmy
              - generic [ref=f1e160]:
                - generic [ref=f1e161]: UTC
                - generic [ref=f1e162]: USD
            - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD" [ref=f1e163]:
              - generic [ref=f1e164]: Test Salon atz1m3
              - paragraph [ref=f1e165]: Auto-generated test business description atz1m3
              - generic [ref=f1e166]:
                - generic [ref=f1e167]: UTC
                - generic [ref=f1e168]: USD
            - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD" [ref=f1e169]:
              - generic [ref=f1e170]: Test Salon b76urd
              - paragraph [ref=f1e171]: Auto-generated test business description b76urd
              - generic [ref=f1e172]:
                - generic [ref=f1e173]: UTC
                - generic [ref=f1e174]: USD
            - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD" [ref=f1e175]:
              - generic [ref=f1e176]: Test Salon btnwca
              - paragraph [ref=f1e177]: Auto-generated test business description btnwca
              - generic [ref=f1e178]:
                - generic [ref=f1e179]: UTC
                - generic [ref=f1e180]: USD
            - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD" [ref=f1e181]:
              - generic [ref=f1e182]: Test Salon c0uqdl
              - paragraph [ref=f1e183]: Auto-generated test business description c0uqdl
              - generic [ref=f1e184]:
                - generic [ref=f1e185]: UTC
                - generic [ref=f1e186]: USD
            - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD" [ref=f1e187]:
              - generic [ref=f1e188]: Test Salon cemiq4
              - paragraph [ref=f1e189]: Auto-generated test business description cemiq4
              - generic [ref=f1e190]:
                - generic [ref=f1e191]: UTC
                - generic [ref=f1e192]: USD
            - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD" [ref=f1e193]:
              - generic [ref=f1e194]: Test Salon cs0sk6
              - paragraph [ref=f1e195]: Auto-generated test business description cs0sk6
              - generic [ref=f1e196]:
                - generic [ref=f1e197]: UTC
                - generic [ref=f1e198]: USD
            - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD" [ref=f1e199]:
              - generic [ref=f1e200]: Test Salon d2s8sx
              - paragraph [ref=f1e201]: Auto-generated test business description d2s8sx
              - generic [ref=f1e202]:
                - generic [ref=f1e203]: UTC
                - generic [ref=f1e204]: USD
            - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD" [ref=f1e205]:
              - generic [ref=f1e206]: Test Salon egni33
              - paragraph [ref=f1e207]: Auto-generated test business description egni33
              - generic [ref=f1e208]:
                - generic [ref=f1e209]: UTC
                - generic [ref=f1e210]: USD
            - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD" [ref=f1e211]:
              - generic [ref=f1e212]: Test Salon fnk1tt
              - paragraph [ref=f1e213]: Auto-generated test business description fnk1tt
              - generic [ref=f1e214]:
                - generic [ref=f1e215]: UTC
                - generic [ref=f1e216]: USD
            - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD" [ref=f1e217]:
              - generic [ref=f1e218]: Test Salon fwgmjd
              - paragraph [ref=f1e219]: Auto-generated test business description fwgmjd
              - generic [ref=f1e220]:
                - generic [ref=f1e221]: UTC
                - generic [ref=f1e222]: USD
            - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD" [ref=f1e223]:
              - generic [ref=f1e224]: Test Salon gi47ns
              - paragraph [ref=f1e225]: Auto-generated test business description gi47ns
              - generic [ref=f1e226]:
                - generic [ref=f1e227]: UTC
                - generic [ref=f1e228]: USD
            - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD" [ref=f1e229]:
              - generic [ref=f1e230]: Test Salon gl6fqe
              - paragraph [ref=f1e231]: Auto-generated test business description gl6fqe
              - generic [ref=f1e232]:
                - generic [ref=f1e233]: UTC
                - generic [ref=f1e234]: USD
            - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD" [ref=f1e235]:
              - generic [ref=f1e236]: Test Salon gl7ea7
              - paragraph [ref=f1e237]: Auto-generated test business description gl7ea7
              - generic [ref=f1e238]:
                - generic [ref=f1e239]: UTC
                - generic [ref=f1e240]: USD
            - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD" [ref=f1e241]:
              - generic [ref=f1e242]: Test Salon hxzb30
              - paragraph [ref=f1e243]: Auto-generated test business description hxzb30
              - generic [ref=f1e244]:
                - generic [ref=f1e245]: UTC
                - generic [ref=f1e246]: USD
            - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD" [ref=f1e247]:
              - generic [ref=f1e248]: Test Salon ls8uew
              - paragraph [ref=f1e249]: Auto-generated test business description ls8uew
              - generic [ref=f1e250]:
                - generic [ref=f1e251]: UTC
                - generic [ref=f1e252]: USD
            - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD" [ref=f1e253]:
              - generic [ref=f1e254]: Test Salon lxdrvs
              - paragraph [ref=f1e255]: Auto-generated test business description lxdrvs
              - generic [ref=f1e256]:
                - generic [ref=f1e257]: UTC
                - generic [ref=f1e258]: USD
            - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD" [ref=f1e259]:
              - generic [ref=f1e260]: Test Salon niqqre
              - paragraph [ref=f1e261]: Auto-generated test business description niqqre
              - generic [ref=f1e262]:
                - generic [ref=f1e263]: UTC
                - generic [ref=f1e264]: USD
            - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD" [ref=f1e265]:
              - generic [ref=f1e266]: Test Salon nnnmtw
              - paragraph [ref=f1e267]: Auto-generated test business description nnnmtw
              - generic [ref=f1e268]:
                - generic [ref=f1e269]: UTC
                - generic [ref=f1e270]: USD
            - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD" [ref=f1e271]:
              - generic [ref=f1e272]: Test Salon oeux2s
              - paragraph [ref=f1e273]: Auto-generated test business description oeux2s
              - generic [ref=f1e274]:
                - generic [ref=f1e275]: UTC
                - generic [ref=f1e276]: USD
            - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD" [ref=f1e277]:
              - generic [ref=f1e278]: Test Salon orw3o4
              - paragraph [ref=f1e279]: Auto-generated test business description orw3o4
              - generic [ref=f1e280]:
                - generic [ref=f1e281]: UTC
                - generic [ref=f1e282]: USD
            - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD" [ref=f1e283]:
              - generic [ref=f1e284]: Test Salon pyoepe
              - paragraph [ref=f1e285]: Auto-generated test business description pyoepe
              - generic [ref=f1e286]:
                - generic [ref=f1e287]: UTC
                - generic [ref=f1e288]: USD
            - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD" [ref=f1e289]:
              - generic [ref=f1e290]: Test Salon qcm18x
              - paragraph [ref=f1e291]: Auto-generated test business description qcm18x
              - generic [ref=f1e292]:
                - generic [ref=f1e293]: UTC
                - generic [ref=f1e294]: USD
            - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD" [ref=f1e295]:
              - generic [ref=f1e296]: Test Salon qlbret
              - paragraph [ref=f1e297]: Auto-generated test business description qlbret
              - generic [ref=f1e298]:
                - generic [ref=f1e299]: UTC
                - generic [ref=f1e300]: USD
            - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD" [ref=f1e301]:
              - generic [ref=f1e302]: Test Salon qr0hfk
              - paragraph [ref=f1e303]: Auto-generated test business description qr0hfk
              - generic [ref=f1e304]:
                - generic [ref=f1e305]: UTC
                - generic [ref=f1e306]: USD
            - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD" [ref=f1e307]:
              - generic [ref=f1e308]: Test Salon r9cxkb
              - paragraph [ref=f1e309]: Auto-generated test business description r9cxkb
              - generic [ref=f1e310]:
                - generic [ref=f1e311]: UTC
                - generic [ref=f1e312]: USD
            - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD" [ref=f1e313]:
              - generic [ref=f1e314]: Test Salon s7a7st
              - paragraph [ref=f1e315]: Auto-generated test business description s7a7st
              - generic [ref=f1e316]:
                - generic [ref=f1e317]: UTC
                - generic [ref=f1e318]: USD
            - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD" [ref=f1e319]:
              - generic [ref=f1e320]: Test Salon sky7cf
              - paragraph [ref=f1e321]: Auto-generated test business description sky7cf
              - generic [ref=f1e322]:
                - generic [ref=f1e323]: UTC
                - generic [ref=f1e324]: USD
            - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD" [ref=f1e325]:
              - generic [ref=f1e326]: Test Salon t9wjh7
              - paragraph [ref=f1e327]: Auto-generated test business description t9wjh7
              - generic [ref=f1e328]:
                - generic [ref=f1e329]: UTC
                - generic [ref=f1e330]: USD
            - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD" [ref=f1e331]:
              - generic [ref=f1e332]: Test Salon ta5ce7
              - paragraph [ref=f1e333]: Auto-generated test business description ta5ce7
              - generic [ref=f1e334]:
                - generic [ref=f1e335]: UTC
                - generic [ref=f1e336]: USD
            - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD" [ref=f1e337]:
              - generic [ref=f1e338]: Test Salon u0g7lb
              - paragraph [ref=f1e339]: Auto-generated test business description u0g7lb
              - generic [ref=f1e340]:
                - generic [ref=f1e341]: UTC
                - generic [ref=f1e342]: USD
            - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD" [ref=f1e343]:
              - generic [ref=f1e344]: Test Salon u8pzhc
              - paragraph [ref=f1e345]: Auto-generated test business description u8pzhc
              - generic [ref=f1e346]:
                - generic [ref=f1e347]: UTC
                - generic [ref=f1e348]: USD
            - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD" [ref=f1e349]:
              - generic [ref=f1e350]: Test Salon ub3aeu
              - paragraph [ref=f1e351]: Auto-generated test business description ub3aeu
              - generic [ref=f1e352]:
                - generic [ref=f1e353]: UTC
                - generic [ref=f1e354]: USD
            - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD" [ref=f1e355]:
              - generic [ref=f1e356]: Test Salon ui869c
              - paragraph [ref=f1e357]: Auto-generated test business description ui869c
              - generic [ref=f1e358]:
                - generic [ref=f1e359]: UTC
                - generic [ref=f1e360]: USD
            - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD" [ref=f1e361]:
              - generic [ref=f1e362]: Test Salon vamdvm
              - paragraph [ref=f1e363]: Auto-generated test business description vamdvm
              - generic [ref=f1e364]:
                - generic [ref=f1e365]: UTC
                - generic [ref=f1e366]: USD
            - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD" [ref=f1e367]:
              - generic [ref=f1e368]: Test Salon vsxf4h
              - paragraph [ref=f1e369]: Auto-generated test business description vsxf4h
              - generic [ref=f1e370]:
                - generic [ref=f1e371]: UTC
                - generic [ref=f1e372]: USD
            - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD" [ref=f1e373]:
              - generic [ref=f1e374]: Test Salon wpsv41
              - paragraph [ref=f1e375]: Auto-generated test business description wpsv41
              - generic [ref=f1e376]:
                - generic [ref=f1e377]: UTC
                - generic [ref=f1e378]: USD
            - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD" [ref=f1e379]:
              - generic [ref=f1e380]: Test Salon wqwz95
              - paragraph [ref=f1e381]: Auto-generated test business description wqwz95
              - generic [ref=f1e382]:
                - generic [ref=f1e383]: UTC
                - generic [ref=f1e384]: USD
            - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD" [ref=f1e385]:
              - generic [ref=f1e386]: Test Salon x4gtj1
              - paragraph [ref=f1e387]: Auto-generated test business description x4gtj1
              - generic [ref=f1e388]:
                - generic [ref=f1e389]: UTC
                - generic [ref=f1e390]: USD
            - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD" [ref=f1e391]:
              - generic [ref=f1e392]: Test Salon x9lli8
              - paragraph [ref=f1e393]: Auto-generated test business description x9lli8
              - generic [ref=f1e394]:
                - generic [ref=f1e395]: UTC
                - generic [ref=f1e396]: USD
            - button "Test Salon xvqmlv UTC USD" [ref=f1e397]:
              - generic [ref=f1e398]: Test Salon xvqmlv
              - generic [ref=f1e399]:
                - generic [ref=f1e400]: UTC
                - generic [ref=f1e401]: USD
            - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD" [ref=f1e402]:
              - generic [ref=f1e403]: Test Salon ztn2hy
              - paragraph [ref=f1e404]: Auto-generated test business description ztn2hy
              - generic [ref=f1e405]:
                - generic [ref=f1e406]: UTC
                - generic [ref=f1e407]: USD
            - button "Zen Spa UTC USD" [ref=f1e408]:
              - generic [ref=f1e409]: Zen Spa
              - generic [ref=f1e410]:
                - generic [ref=f1e411]: UTC
                - generic [ref=f1e412]: USD
            - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD" [ref=f1e413]:
              - generic [ref=f1e414]: chingcho
              - paragraph [ref=f1e415]: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
              - generic [ref=f1e416]:
                - generic [ref=f1e417]: UTC
                - generic [ref=f1e418]: USD
    - contentinfo [ref=f1e419]:
      - generic [ref=f1e420]:
        - generic [ref=f1e421]:
          - generic [ref=f1e422]: "Y"
          - generic [ref=f1e423]: Yarivo Appointments
          - generic [ref=f1e424]: ·
          - generic [ref=f1e425]: yarivo.com
        - generic [ref=f1e426]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=f1e432] [cursor=pointer]
  - alert [ref=f1e436]
```

# Test source

```ts
  1  | /**
  2  |  * Edge Case Test Suite: Referential Integrity & Deletion Constraint Guards
  3  |  * Tests that services or staff members with active confirmed appointments cannot be deleted.
  4  |  */
  5  | 
  6  | const { test, expect } = require('../../fixtures/base-fixture');
  7  | const { generateUniqueService, generateUniqueCustomer } = require('../../utils/string-helper');
  8  | const { getTodayString } = require('../../utils/date-helper');
  9  | 
  10 | test.describe('@edge Deletion Constraint Safeguards', () => {
  11 |   test('should block deletion of a service with active confirmed appointments', async ({
  12 |     authenticatedOwner,
  13 |     apiClient,
  14 |   }) => {
  15 |     const { dashboardPage } = authenticatedOwner;
  16 | 
  17 |     // 1. Create a service via API
  18 |     const newService = generateUniqueService();
  19 |     const srvRes = await apiClient.createService(newService);
  20 |     const serviceId = srvRes.data.id;
  21 | 
  22 |     // 2. Book an appointment for this service
  23 |     const pubBiz = await apiClient.getMyBusiness();
  24 |     const slug = pubBiz.data.slug;
  25 |     const today = getTodayString();
  26 |     const slotsRes = await apiClient.getPublicSlots(slug, serviceId, today);
  27 |     const targetSlot = slotsRes.data[0];
  28 | 
  29 |     const customer = generateUniqueCustomer();
  30 |     await apiClient.bookAppointment(slug, {
  31 |       ...customer,
  32 |       serviceId,
> 33 |       staffId: targetSlot.staff_id,
     |                           ^ TypeError: Cannot read properties of undefined (reading 'staff_id')
  34 |       startTime: targetSlot.start_time,
  35 |     });
  36 | 
  37 |     // 3. Open dashboard Services tab and attempt to delete the service
  38 |     await dashboardPage.switchToServicesTab();
  39 |     await dashboardPage.deleteService(newService.name);
  40 | 
  41 |     // 4. Verify system shows error message blocking deletion
  42 |     await dashboardPage.expectErrorMessage(/Cannot delete service with active confirmed appointments/i);
  43 |     // Verify service is still present in the list
  44 |     await expect(dashboardPage.page.getByText(newService.name)).toBeVisible();
  45 |   });
  46 | });
  47 | 
```