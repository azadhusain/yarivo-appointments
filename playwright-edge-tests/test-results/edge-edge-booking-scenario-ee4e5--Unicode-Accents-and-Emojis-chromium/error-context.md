# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge\edge-booking-scenarios.spec.js >> @edge Public Booking Edge Cases & Boundaries >> should handle customer names with Unicode, Accents, and Emojis
- Location: tests\edge\edge-booking-scenarios.spec.js:36:3

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
            - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD" [ref=e60]:
              - generic [ref=e61]: Test Salon 0amdq1
              - paragraph [ref=e62]: Auto-generated test business description 0amdq1
              - generic [ref=e63]:
                - generic [ref=e64]: UTC
                - generic [ref=e65]: USD
            - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD" [ref=e66]:
              - generic [ref=e67]: Test Salon 1bip1q
              - paragraph [ref=e68]: Auto-generated test business description 1bip1q
              - generic [ref=e69]:
                - generic [ref=e70]: UTC
                - generic [ref=e71]: USD
            - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD" [ref=e72]:
              - generic [ref=e73]: Test Salon 1gtheb
              - paragraph [ref=e74]: Auto-generated test business description 1gtheb
              - generic [ref=e75]:
                - generic [ref=e76]: UTC
                - generic [ref=e77]: USD
            - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD" [ref=e78]:
              - generic [ref=e79]: Test Salon 1hiobw
              - paragraph [ref=e80]: Auto-generated test business description 1hiobw
              - generic [ref=e81]:
                - generic [ref=e82]: UTC
                - generic [ref=e83]: USD
            - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD" [ref=e84]:
              - generic [ref=e85]: Test Salon 35kobd
              - paragraph [ref=e86]: Auto-generated test business description 35kobd
              - generic [ref=e87]:
                - generic [ref=e88]: UTC
                - generic [ref=e89]: USD
            - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD" [ref=e90]:
              - generic [ref=e91]: Test Salon 3kcg5c
              - paragraph [ref=e92]: Auto-generated test business description 3kcg5c
              - generic [ref=e93]:
                - generic [ref=e94]: UTC
                - generic [ref=e95]: USD
            - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD" [ref=e96]:
              - generic [ref=e97]: Test Salon 4odkr7
              - paragraph [ref=e98]: Auto-generated test business description 4odkr7
              - generic [ref=e99]:
                - generic [ref=e100]: UTC
                - generic [ref=e101]: USD
            - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD" [ref=e102]:
              - generic [ref=e103]: Test Salon 5kpeld
              - paragraph [ref=e104]: Auto-generated test business description 5kpeld
              - generic [ref=e105]:
                - generic [ref=e106]: UTC
                - generic [ref=e107]: USD
            - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD" [ref=e108]:
              - generic [ref=e109]: Test Salon 6xqwra
              - paragraph [ref=e110]: Auto-generated test business description 6xqwra
              - generic [ref=e111]:
                - generic [ref=e112]: UTC
                - generic [ref=e113]: USD
            - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD" [ref=e114]:
              - generic [ref=e115]: Test Salon 76cxtv
              - paragraph [ref=e116]: Auto-generated test business description 76cxtv
              - generic [ref=e117]:
                - generic [ref=e118]: UTC
                - generic [ref=e119]: USD
            - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD" [ref=e120]:
              - generic [ref=e121]: Test Salon 7bit9w
              - paragraph [ref=e122]: Auto-generated test business description 7bit9w
              - generic [ref=e123]:
                - generic [ref=e124]: UTC
                - generic [ref=e125]: USD
            - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD" [ref=e126]:
              - generic [ref=e127]: Test Salon 7nf9hv
              - paragraph [ref=e128]: Auto-generated test business description 7nf9hv
              - generic [ref=e129]:
                - generic [ref=e130]: UTC
                - generic [ref=e131]: USD
            - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD" [ref=e132]:
              - generic [ref=e133]: Test Salon 7o4pn7
              - paragraph [ref=e134]: Auto-generated test business description 7o4pn7
              - generic [ref=e135]:
                - generic [ref=e136]: UTC
                - generic [ref=e137]: USD
            - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD" [ref=e138]:
              - generic [ref=e139]: Test Salon 8h9i5t
              - paragraph [ref=e140]: Auto-generated test business description 8h9i5t
              - generic [ref=e141]:
                - generic [ref=e142]: UTC
                - generic [ref=e143]: USD
            - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD" [ref=e144]:
              - generic [ref=e145]: Test Salon a68qlk
              - paragraph [ref=e146]: Auto-generated test business description a68qlk
              - generic [ref=e147]:
                - generic [ref=e148]: UTC
                - generic [ref=e149]: USD
            - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD" [ref=e150]:
              - generic [ref=e151]: Test Salon asymmy
              - paragraph [ref=e152]: Auto-generated test business description asymmy
              - generic [ref=e153]:
                - generic [ref=e154]: UTC
                - generic [ref=e155]: USD
            - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD" [ref=e156]:
              - generic [ref=e157]: Test Salon b76urd
              - paragraph [ref=e158]: Auto-generated test business description b76urd
              - generic [ref=e159]:
                - generic [ref=e160]: UTC
                - generic [ref=e161]: USD
            - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD" [ref=e162]:
              - generic [ref=e163]: Test Salon btnwca
              - paragraph [ref=e164]: Auto-generated test business description btnwca
              - generic [ref=e165]:
                - generic [ref=e166]: UTC
                - generic [ref=e167]: USD
            - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD" [ref=e168]:
              - generic [ref=e169]: Test Salon c0uqdl
              - paragraph [ref=e170]: Auto-generated test business description c0uqdl
              - generic [ref=e171]:
                - generic [ref=e172]: UTC
                - generic [ref=e173]: USD
            - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD" [ref=e174]:
              - generic [ref=e175]: Test Salon cemiq4
              - paragraph [ref=e176]: Auto-generated test business description cemiq4
              - generic [ref=e177]:
                - generic [ref=e178]: UTC
                - generic [ref=e179]: USD
            - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD" [ref=e180]:
              - generic [ref=e181]: Test Salon cs0sk6
              - paragraph [ref=e182]: Auto-generated test business description cs0sk6
              - generic [ref=e183]:
                - generic [ref=e184]: UTC
                - generic [ref=e185]: USD
            - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD" [ref=e186]:
              - generic [ref=e187]: Test Salon d2s8sx
              - paragraph [ref=e188]: Auto-generated test business description d2s8sx
              - generic [ref=e189]:
                - generic [ref=e190]: UTC
                - generic [ref=e191]: USD
            - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD" [ref=e192]:
              - generic [ref=e193]: Test Salon egni33
              - paragraph [ref=e194]: Auto-generated test business description egni33
              - generic [ref=e195]:
                - generic [ref=e196]: UTC
                - generic [ref=e197]: USD
            - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD" [ref=e198]:
              - generic [ref=e199]: Test Salon fnk1tt
              - paragraph [ref=e200]: Auto-generated test business description fnk1tt
              - generic [ref=e201]:
                - generic [ref=e202]: UTC
                - generic [ref=e203]: USD
            - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD" [ref=e204]:
              - generic [ref=e205]: Test Salon fwgmjd
              - paragraph [ref=e206]: Auto-generated test business description fwgmjd
              - generic [ref=e207]:
                - generic [ref=e208]: UTC
                - generic [ref=e209]: USD
            - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD" [ref=e210]:
              - generic [ref=e211]: Test Salon gi47ns
              - paragraph [ref=e212]: Auto-generated test business description gi47ns
              - generic [ref=e213]:
                - generic [ref=e214]: UTC
                - generic [ref=e215]: USD
            - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD" [ref=e216]:
              - generic [ref=e217]: Test Salon gl6fqe
              - paragraph [ref=e218]: Auto-generated test business description gl6fqe
              - generic [ref=e219]:
                - generic [ref=e220]: UTC
                - generic [ref=e221]: USD
            - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD" [ref=e222]:
              - generic [ref=e223]: Test Salon gl7ea7
              - paragraph [ref=e224]: Auto-generated test business description gl7ea7
              - generic [ref=e225]:
                - generic [ref=e226]: UTC
                - generic [ref=e227]: USD
            - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD" [ref=e228]:
              - generic [ref=e229]: Test Salon hxzb30
              - paragraph [ref=e230]: Auto-generated test business description hxzb30
              - generic [ref=e231]:
                - generic [ref=e232]: UTC
                - generic [ref=e233]: USD
            - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD" [ref=e234]:
              - generic [ref=e235]: Test Salon ls8uew
              - paragraph [ref=e236]: Auto-generated test business description ls8uew
              - generic [ref=e237]:
                - generic [ref=e238]: UTC
                - generic [ref=e239]: USD
            - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD" [ref=e240]:
              - generic [ref=e241]: Test Salon lxdrvs
              - paragraph [ref=e242]: Auto-generated test business description lxdrvs
              - generic [ref=e243]:
                - generic [ref=e244]: UTC
                - generic [ref=e245]: USD
            - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD" [ref=e246]:
              - generic [ref=e247]: Test Salon niqqre
              - paragraph [ref=e248]: Auto-generated test business description niqqre
              - generic [ref=e249]:
                - generic [ref=e250]: UTC
                - generic [ref=e251]: USD
            - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD" [ref=e252]:
              - generic [ref=e253]: Test Salon nnnmtw
              - paragraph [ref=e254]: Auto-generated test business description nnnmtw
              - generic [ref=e255]:
                - generic [ref=e256]: UTC
                - generic [ref=e257]: USD
            - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD" [ref=e258]:
              - generic [ref=e259]: Test Salon orw3o4
              - paragraph [ref=e260]: Auto-generated test business description orw3o4
              - generic [ref=e261]:
                - generic [ref=e262]: UTC
                - generic [ref=e263]: USD
            - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD" [ref=e264]:
              - generic [ref=e265]: Test Salon pyoepe
              - paragraph [ref=e266]: Auto-generated test business description pyoepe
              - generic [ref=e267]:
                - generic [ref=e268]: UTC
                - generic [ref=e269]: USD
            - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD" [ref=e270]:
              - generic [ref=e271]: Test Salon qcm18x
              - paragraph [ref=e272]: Auto-generated test business description qcm18x
              - generic [ref=e273]:
                - generic [ref=e274]: UTC
                - generic [ref=e275]: USD
            - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD" [ref=e276]:
              - generic [ref=e277]: Test Salon qlbret
              - paragraph [ref=e278]: Auto-generated test business description qlbret
              - generic [ref=e279]:
                - generic [ref=e280]: UTC
                - generic [ref=e281]: USD
            - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD" [ref=e282]:
              - generic [ref=e283]: Test Salon qr0hfk
              - paragraph [ref=e284]: Auto-generated test business description qr0hfk
              - generic [ref=e285]:
                - generic [ref=e286]: UTC
                - generic [ref=e287]: USD
            - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD" [ref=e288]:
              - generic [ref=e289]: Test Salon r9cxkb
              - paragraph [ref=e290]: Auto-generated test business description r9cxkb
              - generic [ref=e291]:
                - generic [ref=e292]: UTC
                - generic [ref=e293]: USD
            - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD" [ref=e294]:
              - generic [ref=e295]: Test Salon s7a7st
              - paragraph [ref=e296]: Auto-generated test business description s7a7st
              - generic [ref=e297]:
                - generic [ref=e298]: UTC
                - generic [ref=e299]: USD
            - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD" [ref=e300]:
              - generic [ref=e301]: Test Salon sky7cf
              - paragraph [ref=e302]: Auto-generated test business description sky7cf
              - generic [ref=e303]:
                - generic [ref=e304]: UTC
                - generic [ref=e305]: USD
            - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD" [ref=e306]:
              - generic [ref=e307]: Test Salon t9wjh7
              - paragraph [ref=e308]: Auto-generated test business description t9wjh7
              - generic [ref=e309]:
                - generic [ref=e310]: UTC
                - generic [ref=e311]: USD
            - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD" [ref=e312]:
              - generic [ref=e313]: Test Salon ta5ce7
              - paragraph [ref=e314]: Auto-generated test business description ta5ce7
              - generic [ref=e315]:
                - generic [ref=e316]: UTC
                - generic [ref=e317]: USD
            - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD" [ref=e318]:
              - generic [ref=e319]: Test Salon u0g7lb
              - paragraph [ref=e320]: Auto-generated test business description u0g7lb
              - generic [ref=e321]:
                - generic [ref=e322]: UTC
                - generic [ref=e323]: USD
            - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD" [ref=e324]:
              - generic [ref=e325]: Test Salon u8pzhc
              - paragraph [ref=e326]: Auto-generated test business description u8pzhc
              - generic [ref=e327]:
                - generic [ref=e328]: UTC
                - generic [ref=e329]: USD
            - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD" [ref=e330]:
              - generic [ref=e331]: Test Salon ub3aeu
              - paragraph [ref=e332]: Auto-generated test business description ub3aeu
              - generic [ref=e333]:
                - generic [ref=e334]: UTC
                - generic [ref=e335]: USD
            - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD" [ref=e336]:
              - generic [ref=e337]: Test Salon ui869c
              - paragraph [ref=e338]: Auto-generated test business description ui869c
              - generic [ref=e339]:
                - generic [ref=e340]: UTC
                - generic [ref=e341]: USD
            - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD" [ref=e342]:
              - generic [ref=e343]: Test Salon vamdvm
              - paragraph [ref=e344]: Auto-generated test business description vamdvm
              - generic [ref=e345]:
                - generic [ref=e346]: UTC
                - generic [ref=e347]: USD
            - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD" [ref=e348]:
              - generic [ref=e349]: Test Salon vsxf4h
              - paragraph [ref=e350]: Auto-generated test business description vsxf4h
              - generic [ref=e351]:
                - generic [ref=e352]: UTC
                - generic [ref=e353]: USD
            - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD" [ref=e354]:
              - generic [ref=e355]: Test Salon wpsv41
              - paragraph [ref=e356]: Auto-generated test business description wpsv41
              - generic [ref=e357]:
                - generic [ref=e358]: UTC
                - generic [ref=e359]: USD
            - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD" [ref=e360]:
              - generic [ref=e361]: Test Salon wqwz95
              - paragraph [ref=e362]: Auto-generated test business description wqwz95
              - generic [ref=e363]:
                - generic [ref=e364]: UTC
                - generic [ref=e365]: USD
            - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD" [ref=e366]:
              - generic [ref=e367]: Test Salon x4gtj1
              - paragraph [ref=e368]: Auto-generated test business description x4gtj1
              - generic [ref=e369]:
                - generic [ref=e370]: UTC
                - generic [ref=e371]: USD
            - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD" [ref=e372]:
              - generic [ref=e373]: Test Salon x9lli8
              - paragraph [ref=e374]: Auto-generated test business description x9lli8
              - generic [ref=e375]:
                - generic [ref=e376]: UTC
                - generic [ref=e377]: USD
            - button "Test Salon xvqmlv UTC USD" [ref=e378]:
              - generic [ref=e379]: Test Salon xvqmlv
              - generic [ref=e380]:
                - generic [ref=e381]: UTC
                - generic [ref=e382]: USD
            - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD" [ref=e383]:
              - generic [ref=e384]: Test Salon ztn2hy
              - paragraph [ref=e385]: Auto-generated test business description ztn2hy
              - generic [ref=e386]:
                - generic [ref=e387]: UTC
                - generic [ref=e388]: USD
            - button "Zen Spa UTC USD" [ref=e389]:
              - generic [ref=e390]: Zen Spa
              - generic [ref=e391]:
                - generic [ref=e392]: UTC
                - generic [ref=e393]: USD
            - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD" [ref=e394]:
              - generic [ref=e395]: chingcho
              - paragraph [ref=e396]: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
              - generic [ref=e397]:
                - generic [ref=e398]: UTC
                - generic [ref=e399]: USD
        - generic [ref=e400]:
          - generic [ref=e401]:
            - heading "Agenda" [level=3] [ref=e402]
            - paragraph [ref=e403]: No address listed · No phone
          - separator [ref=e404]
          - generic [ref=e405]:
            - heading "2. Select Service" [level=4] [ref=e406]
            - button "Standard Appointment 50.00 USD General appointment service ⏱️ 30 mins" [ref=e408]:
              - generic [ref=e409]:
                - generic [ref=e410]: Standard Appointment
                - generic [ref=e411]: 50.00 USD
              - paragraph [ref=e412]: General appointment service
              - generic [ref=e413]: ⏱️ 30 mins
          - generic [ref=e414]:
            - generic [ref=e415]:
              - generic [ref=e416]: Select Date
              - button "📅 Sun, Aug 23, 2026 ▼" [ref=e418] [cursor=pointer]:
                - generic [ref=e419]:
                  - generic [ref=e420]: 📅
                  - generic [ref=e421]: Sun, Aug 23, 2026
                - generic [ref=e422]: ▼
            - generic [ref=e423]:
              - generic [ref=e424]: Preferred Staff (Optional)
              - combobox [ref=e425]:
                - option "Any available staff member" [selected]
                - option "Primary Specialist"
          - generic [ref=e426]:
            - generic [ref=e428]:
              - heading "3. Available Slots" [level=4] [ref=e429]
              - generic [ref=e430]: All times shown in business timezone (UTC)
            - paragraph [ref=e431]: No slots available for this date/service.
    - contentinfo [ref=e432]:
      - generic [ref=e433]:
        - generic [ref=e434]:
          - generic [ref=e435]: "Y"
          - generic [ref=e436]: Yarivo Appointments
          - generic [ref=e437]: ·
          - generic [ref=e438]: yarivo.com
        - generic [ref=e439]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=e445] [cursor=pointer]
  - alert [ref=e449]
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