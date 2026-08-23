# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge\edge-concurrency-navigation.spec.js >> @edge Concurrency, Rapid Clicks & Navigation State >> should reset selected slot when customer switches to a different service
- Location: tests\edge\edge-concurrency-navigation.spec.js:26:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /Book Appointment|Confirm Booking|Confirming\.\.\./i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: /Book Appointment|Confirm Booking|Confirming\.\.\./i })

```

```yaml
- banner:
  - text: Y Yarivo Global Appointments
  - navigation:
    - button "Public Booking"
    - button "Business Login"
    - button "Register Business"
- main:
  - heading "Book an Appointment" [level=1]
  - paragraph: Select a business, choose your service, pick a date, and reserve your slot instantly.
  - heading "1. Select Business" [level=2]
  - 'button "Agenda Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips: UTC USD"':
    - text: Agenda
    - paragraph: "Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips:"
    - text: UTC USD
  - button "Apex Salon & Spa UTC USD"
  - button "Azad Asia/Calcutta USD"
  - button "Crown Salon UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD":
    - text: Test Salon 0amdq1
    - paragraph: Auto-generated test business description 0amdq1
    - text: UTC USD
  - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD":
    - text: Test Salon 0bcq40
    - paragraph: Auto-generated test business description 0bcq40
    - text: UTC USD
  - button "Test Salon 0bg9rw Auto-generated test business description 0bg9rw UTC USD":
    - text: Test Salon 0bg9rw
    - paragraph: Auto-generated test business description 0bg9rw
    - text: UTC USD
  - button "Test Salon 0dcs33 Auto-generated test business description 0dcs33 UTC USD":
    - text: Test Salon 0dcs33
    - paragraph: Auto-generated test business description 0dcs33
    - text: UTC USD
  - button "Test Salon 0kklgx Auto-generated test business description 0kklgx UTC USD":
    - text: Test Salon 0kklgx
    - paragraph: Auto-generated test business description 0kklgx
    - text: UTC USD
  - button "Test Salon 0rleyb Auto-generated test business description 0rleyb UTC USD":
    - text: Test Salon 0rleyb
    - paragraph: Auto-generated test business description 0rleyb
    - text: UTC USD
  - button "Test Salon 0sewfj Auto-generated test business description 0sewfj UTC USD":
    - text: Test Salon 0sewfj
    - paragraph: Auto-generated test business description 0sewfj
    - text: UTC USD
  - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD":
    - text: Test Salon 1bip1q
    - paragraph: Auto-generated test business description 1bip1q
    - text: UTC USD
  - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD":
    - text: Test Salon 1gtheb
    - paragraph: Auto-generated test business description 1gtheb
    - text: UTC USD
  - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD":
    - text: Test Salon 1hiobw
    - paragraph: Auto-generated test business description 1hiobw
    - text: UTC USD
  - button "Test Salon 1tz8tl Auto-generated test business description 1tz8tl UTC USD":
    - text: Test Salon 1tz8tl
    - paragraph: Auto-generated test business description 1tz8tl
    - text: UTC USD
  - button "Test Salon 2ondoq Auto-generated test business description 2ondoq UTC USD":
    - text: Test Salon 2ondoq
    - paragraph: Auto-generated test business description 2ondoq
    - text: UTC USD
  - button "Test Salon 2vlcr5 Auto-generated test business description 2vlcr5 UTC USD":
    - text: Test Salon 2vlcr5
    - paragraph: Auto-generated test business description 2vlcr5
    - text: UTC USD
  - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD":
    - text: Test Salon 35kobd
    - paragraph: Auto-generated test business description 35kobd
    - text: UTC USD
  - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD":
    - text: Test Salon 3kcg5c
    - paragraph: Auto-generated test business description 3kcg5c
    - text: UTC USD
  - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD":
    - text: Test Salon 4odkr7
    - paragraph: Auto-generated test business description 4odkr7
    - text: UTC USD
  - button "Test Salon 4xohph Auto-generated test business description 4xohph UTC USD":
    - text: Test Salon 4xohph
    - paragraph: Auto-generated test business description 4xohph
    - text: UTC USD
  - button "Test Salon 5ep3q6 Auto-generated test business description 5ep3q6 UTC USD":
    - text: Test Salon 5ep3q6
    - paragraph: Auto-generated test business description 5ep3q6
    - text: UTC USD
  - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD":
    - text: Test Salon 5kpeld
    - paragraph: Auto-generated test business description 5kpeld
    - text: UTC USD
  - button "Test Salon 68wan7 Auto-generated test business description 68wan7 UTC USD":
    - text: Test Salon 68wan7
    - paragraph: Auto-generated test business description 68wan7
    - text: UTC USD
  - button "Test Salon 6ev8gh Auto-generated test business description 6ev8gh UTC USD":
    - text: Test Salon 6ev8gh
    - paragraph: Auto-generated test business description 6ev8gh
    - text: UTC USD
  - button "Test Salon 6us1xu Auto-generated test business description 6us1xu UTC USD":
    - text: Test Salon 6us1xu
    - paragraph: Auto-generated test business description 6us1xu
    - text: UTC USD
  - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD":
    - text: Test Salon 6xqwra
    - paragraph: Auto-generated test business description 6xqwra
    - text: UTC USD
  - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD":
    - text: Test Salon 76cxtv
    - paragraph: Auto-generated test business description 76cxtv
    - text: UTC USD
  - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD":
    - text: Test Salon 7bit9w
    - paragraph: Auto-generated test business description 7bit9w
    - text: UTC USD
  - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD":
    - text: Test Salon 7nf9hv
    - paragraph: Auto-generated test business description 7nf9hv
    - text: UTC USD
  - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD":
    - text: Test Salon 7o4pn7
    - paragraph: Auto-generated test business description 7o4pn7
    - text: UTC USD
  - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD":
    - text: Test Salon 8h9i5t
    - paragraph: Auto-generated test business description 8h9i5t
    - text: UTC USD
  - button "Test Salon 9y7j6v Auto-generated test business description 9y7j6v UTC USD":
    - text: Test Salon 9y7j6v
    - paragraph: Auto-generated test business description 9y7j6v
    - text: UTC USD
  - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD":
    - text: Test Salon a68qlk
    - paragraph: Auto-generated test business description a68qlk
    - text: UTC USD
  - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD":
    - text: Test Salon asymmy
    - paragraph: Auto-generated test business description asymmy
    - text: UTC USD
  - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD":
    - text: Test Salon atz1m3
    - paragraph: Auto-generated test business description atz1m3
    - text: UTC USD
  - button "Test Salon b2od8p Auto-generated test business description b2od8p UTC USD":
    - text: Test Salon b2od8p
    - paragraph: Auto-generated test business description b2od8p
    - text: UTC USD
  - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD":
    - text: Test Salon b76urd
    - paragraph: Auto-generated test business description b76urd
    - text: UTC USD
  - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD":
    - text: Test Salon btnwca
    - paragraph: Auto-generated test business description btnwca
    - text: UTC USD
  - button "Test Salon buvlm6 Auto-generated test business description buvlm6 UTC USD":
    - text: Test Salon buvlm6
    - paragraph: Auto-generated test business description buvlm6
    - text: UTC USD
  - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD":
    - text: Test Salon c0uqdl
    - paragraph: Auto-generated test business description c0uqdl
    - text: UTC USD
  - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD":
    - text: Test Salon cemiq4
    - paragraph: Auto-generated test business description cemiq4
    - text: UTC USD
  - button "Test Salon cktfm5 Auto-generated test business description cktfm5 UTC USD":
    - text: Test Salon cktfm5
    - paragraph: Auto-generated test business description cktfm5
    - text: UTC USD
  - button "Test Salon cr33gn Auto-generated test business description cr33gn UTC USD":
    - text: Test Salon cr33gn
    - paragraph: Auto-generated test business description cr33gn
    - text: UTC USD
  - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD":
    - text: Test Salon cs0sk6
    - paragraph: Auto-generated test business description cs0sk6
    - text: UTC USD
  - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD":
    - text: Test Salon d2s8sx
    - paragraph: Auto-generated test business description d2s8sx
    - text: UTC USD
  - button "Test Salon e2cvo6 Auto-generated test business description e2cvo6 UTC USD":
    - text: Test Salon e2cvo6
    - paragraph: Auto-generated test business description e2cvo6
    - text: UTC USD
  - button "Test Salon e6ccjp Auto-generated test business description e6ccjp UTC USD":
    - text: Test Salon e6ccjp
    - paragraph: Auto-generated test business description e6ccjp
    - text: UTC USD
  - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD":
    - text: Test Salon egni33
    - paragraph: Auto-generated test business description egni33
    - text: UTC USD
  - button "Test Salon eog81f Auto-generated test business description eog81f UTC USD":
    - text: Test Salon eog81f
    - paragraph: Auto-generated test business description eog81f
    - text: UTC USD
  - button "Test Salon esyzer Auto-generated test business description esyzer UTC USD":
    - text: Test Salon esyzer
    - paragraph: Auto-generated test business description esyzer
    - text: UTC USD
  - button "Test Salon f39zeb Auto-generated test business description f39zeb UTC USD":
    - text: Test Salon f39zeb
    - paragraph: Auto-generated test business description f39zeb
    - text: UTC USD
  - button "Test Salon f66hvn Auto-generated test business description f66hvn UTC USD":
    - text: Test Salon f66hvn
    - paragraph: Auto-generated test business description f66hvn
    - text: UTC USD
  - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD":
    - text: Test Salon fnk1tt
    - paragraph: Auto-generated test business description fnk1tt
    - text: UTC USD
  - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD":
    - text: Test Salon fwgmjd
    - paragraph: Auto-generated test business description fwgmjd
    - text: UTC USD
  - button "Test Salon g4v7yp Auto-generated test business description g4v7yp UTC USD":
    - text: Test Salon g4v7yp
    - paragraph: Auto-generated test business description g4v7yp
    - text: UTC USD
  - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD":
    - text: Test Salon gi47ns
    - paragraph: Auto-generated test business description gi47ns
    - text: UTC USD
  - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD":
    - text: Test Salon gl6fqe
    - paragraph: Auto-generated test business description gl6fqe
    - text: UTC USD
  - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD":
    - text: Test Salon gl7ea7
    - paragraph: Auto-generated test business description gl7ea7
    - text: UTC USD
  - button "Test Salon hsr5y2 Auto-generated test business description hsr5y2 UTC USD":
    - text: Test Salon hsr5y2
    - paragraph: Auto-generated test business description hsr5y2
    - text: UTC USD
  - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD":
    - text: Test Salon hxzb30
    - paragraph: Auto-generated test business description hxzb30
    - text: UTC USD
  - button "Test Salon hywbat Auto-generated test business description hywbat UTC USD":
    - text: Test Salon hywbat
    - paragraph: Auto-generated test business description hywbat
    - text: UTC USD
  - button "Test Salon i2ygf8 Auto-generated test business description i2ygf8 UTC USD":
    - text: Test Salon i2ygf8
    - paragraph: Auto-generated test business description i2ygf8
    - text: UTC USD
  - button "Test Salon igp24q Auto-generated test business description igp24q UTC USD":
    - text: Test Salon igp24q
    - paragraph: Auto-generated test business description igp24q
    - text: UTC USD
  - button "Test Salon io5wbl Auto-generated test business description io5wbl UTC USD":
    - text: Test Salon io5wbl
    - paragraph: Auto-generated test business description io5wbl
    - text: UTC USD
  - button "Test Salon iq4yfy Auto-generated test business description iq4yfy UTC USD":
    - text: Test Salon iq4yfy
    - paragraph: Auto-generated test business description iq4yfy
    - text: UTC USD
  - button "Test Salon j9kwz5 Auto-generated test business description j9kwz5 UTC USD":
    - text: Test Salon j9kwz5
    - paragraph: Auto-generated test business description j9kwz5
    - text: UTC USD
  - button "Test Salon jyc5f4 Auto-generated test business description jyc5f4 UTC USD":
    - text: Test Salon jyc5f4
    - paragraph: Auto-generated test business description jyc5f4
    - text: UTC USD
  - button "Test Salon kaw4su Auto-generated test business description kaw4su UTC USD":
    - text: Test Salon kaw4su
    - paragraph: Auto-generated test business description kaw4su
    - text: UTC USD
  - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD":
    - text: Test Salon ls8uew
    - paragraph: Auto-generated test business description ls8uew
    - text: UTC USD
  - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD":
    - text: Test Salon lxdrvs
    - paragraph: Auto-generated test business description lxdrvs
    - text: UTC USD
  - button "Test Salon mmwtfq Auto-generated test business description mmwtfq UTC USD":
    - text: Test Salon mmwtfq
    - paragraph: Auto-generated test business description mmwtfq
    - text: UTC USD
  - button "Test Salon ndj6b4 Auto-generated test business description ndj6b4 UTC USD":
    - text: Test Salon ndj6b4
    - paragraph: Auto-generated test business description ndj6b4
    - text: UTC USD
  - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD":
    - text: Test Salon niqqre
    - paragraph: Auto-generated test business description niqqre
    - text: UTC USD
  - button "Test Salon njflen Auto-generated test business description njflen UTC USD":
    - text: Test Salon njflen
    - paragraph: Auto-generated test business description njflen
    - text: UTC USD
  - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD":
    - text: Test Salon nnnmtw
    - paragraph: Auto-generated test business description nnnmtw
    - text: UTC USD
  - button "Test Salon nrc7yx Auto-generated test business description nrc7yx UTC USD":
    - text: Test Salon nrc7yx
    - paragraph: Auto-generated test business description nrc7yx
    - text: UTC USD
  - button "Test Salon ntu9yq Auto-generated test business description ntu9yq UTC USD":
    - text: Test Salon ntu9yq
    - paragraph: Auto-generated test business description ntu9yq
    - text: UTC USD
  - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD":
    - text: Test Salon oeux2s
    - paragraph: Auto-generated test business description oeux2s
    - text: UTC USD
  - button "Test Salon ofw1px Auto-generated test business description ofw1px UTC USD":
    - text: Test Salon ofw1px
    - paragraph: Auto-generated test business description ofw1px
    - text: UTC USD
  - button "Test Salon oqmwe8 UTC USD"
  - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD":
    - text: Test Salon orw3o4
    - paragraph: Auto-generated test business description orw3o4
    - text: UTC USD
  - button "Test Salon ox1a1r Auto-generated test business description ox1a1r UTC USD":
    - text: Test Salon ox1a1r
    - paragraph: Auto-generated test business description ox1a1r
    - text: UTC USD
  - button "Test Salon p1hgbn Auto-generated test business description p1hgbn UTC USD":
    - text: Test Salon p1hgbn
    - paragraph: Auto-generated test business description p1hgbn
    - text: UTC USD
  - button "Test Salon p27b4v Auto-generated test business description p27b4v UTC USD":
    - text: Test Salon p27b4v
    - paragraph: Auto-generated test business description p27b4v
    - text: UTC USD
  - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD":
    - text: Test Salon pyoepe
    - paragraph: Auto-generated test business description pyoepe
    - text: UTC USD
  - button "Test Salon q65mxa Auto-generated test business description q65mxa UTC USD":
    - text: Test Salon q65mxa
    - paragraph: Auto-generated test business description q65mxa
    - text: UTC USD
  - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD":
    - text: Test Salon qcm18x
    - paragraph: Auto-generated test business description qcm18x
    - text: UTC USD
  - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD":
    - text: Test Salon qlbret
    - paragraph: Auto-generated test business description qlbret
    - text: UTC USD
  - button "Test Salon qlz60s Auto-generated test business description qlz60s UTC USD":
    - text: Test Salon qlz60s
    - paragraph: Auto-generated test business description qlz60s
    - text: UTC USD
  - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD":
    - text: Test Salon qr0hfk
    - paragraph: Auto-generated test business description qr0hfk
    - text: UTC USD
  - button "Test Salon qzedc4 Auto-generated test business description qzedc4 UTC USD":
    - text: Test Salon qzedc4
    - paragraph: Auto-generated test business description qzedc4
    - text: UTC USD
  - button "Test Salon r3vudz Auto-generated test business description r3vudz UTC USD":
    - text: Test Salon r3vudz
    - paragraph: Auto-generated test business description r3vudz
    - text: UTC USD
  - button "Test Salon r82npz Auto-generated test business description r82npz UTC USD":
    - text: Test Salon r82npz
    - paragraph: Auto-generated test business description r82npz
    - text: UTC USD
  - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD":
    - text: Test Salon r9cxkb
    - paragraph: Auto-generated test business description r9cxkb
    - text: UTC USD
  - button "Test Salon rf1l22 Auto-generated test business description rf1l22 UTC USD":
    - text: Test Salon rf1l22
    - paragraph: Auto-generated test business description rf1l22
    - text: UTC USD
  - button "Test Salon rolg7h Auto-generated test business description rolg7h UTC USD":
    - text: Test Salon rolg7h
    - paragraph: Auto-generated test business description rolg7h
    - text: UTC USD
  - button "Test Salon s4buzl Auto-generated test business description s4buzl UTC USD":
    - text: Test Salon s4buzl
    - paragraph: Auto-generated test business description s4buzl
    - text: UTC USD
  - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD":
    - text: Test Salon s7a7st
    - paragraph: Auto-generated test business description s7a7st
    - text: UTC USD
  - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD":
    - text: Test Salon sky7cf
    - paragraph: Auto-generated test business description sky7cf
    - text: UTC USD
  - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD":
    - text: Test Salon t9wjh7
    - paragraph: Auto-generated test business description t9wjh7
    - text: UTC USD
  - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD":
    - text: Test Salon ta5ce7
    - paragraph: Auto-generated test business description ta5ce7
    - text: UTC USD
  - button "Test Salon trubva Auto-generated test business description trubva UTC USD":
    - text: Test Salon trubva
    - paragraph: Auto-generated test business description trubva
    - text: UTC USD
  - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD":
    - text: Test Salon u0g7lb
    - paragraph: Auto-generated test business description u0g7lb
    - text: UTC USD
  - button "Test Salon u466xi Auto-generated test business description u466xi UTC USD":
    - text: Test Salon u466xi
    - paragraph: Auto-generated test business description u466xi
    - text: UTC USD
  - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD":
    - text: Test Salon u8pzhc
    - paragraph: Auto-generated test business description u8pzhc
    - text: UTC USD
  - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD":
    - text: Test Salon ub3aeu
    - paragraph: Auto-generated test business description ub3aeu
    - text: UTC USD
  - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD":
    - text: Test Salon ui869c
    - paragraph: Auto-generated test business description ui869c
    - text: UTC USD
  - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD":
    - text: Test Salon vamdvm
    - paragraph: Auto-generated test business description vamdvm
    - text: UTC USD
  - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD":
    - text: Test Salon vsxf4h
    - paragraph: Auto-generated test business description vsxf4h
    - text: UTC USD
  - button "Test Salon vyvnvm Auto-generated test business description vyvnvm UTC USD":
    - text: Test Salon vyvnvm
    - paragraph: Auto-generated test business description vyvnvm
    - text: UTC USD
  - button "Test Salon wnb5i6 Auto-generated test business description wnb5i6 UTC USD":
    - text: Test Salon wnb5i6
    - paragraph: Auto-generated test business description wnb5i6
    - text: UTC USD
  - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD":
    - text: Test Salon wpsv41
    - paragraph: Auto-generated test business description wpsv41
    - text: UTC USD
  - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD":
    - text: Test Salon wqwz95
    - paragraph: Auto-generated test business description wqwz95
    - text: UTC USD
  - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD":
    - text: Test Salon x4gtj1
    - paragraph: Auto-generated test business description x4gtj1
    - text: UTC USD
  - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD":
    - text: Test Salon x9lli8
    - paragraph: Auto-generated test business description x9lli8
    - text: UTC USD
  - button "Test Salon xoymd5 Auto-generated test business description xoymd5 UTC USD":
    - text: Test Salon xoymd5
    - paragraph: Auto-generated test business description xoymd5
    - text: UTC USD
  - button "Test Salon xvqmlv UTC USD"
  - button "Test Salon y1a00e Auto-generated test business description y1a00e UTC USD":
    - text: Test Salon y1a00e
    - paragraph: Auto-generated test business description y1a00e
    - text: UTC USD
  - button "Test Salon yrlmqy Auto-generated test business description yrlmqy UTC USD":
    - text: Test Salon yrlmqy
    - paragraph: Auto-generated test business description yrlmqy
    - text: UTC USD
  - button "Test Salon z5y8m6 Auto-generated test business description z5y8m6 UTC USD":
    - text: Test Salon z5y8m6
    - paragraph: Auto-generated test business description z5y8m6
    - text: UTC USD
  - button "Test Salon zh7z25 Auto-generated test business description zh7z25 UTC USD":
    - text: Test Salon zh7z25
    - paragraph: Auto-generated test business description zh7z25
    - text: UTC USD
  - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD":
    - text: Test Salon ztn2hy
    - paragraph: Auto-generated test business description ztn2hy
    - text: UTC USD
  - button "Zen Spa UTC USD"
  - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD":
    - text: chingcho
    - paragraph: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
    - text: UTC USD
  - heading "Agenda" [level=3]
  - paragraph: No address listed · No phone
  - separator
  - heading "2. Select Service" [level=4]
  - button "Standard Appointment 50.00 USD General appointment service ⏱️ 30 mins":
    - text: Standard Appointment 50.00 USD
    - paragraph: General appointment service
    - text: ⏱️ 30 mins
  - text: Select Date
  - button "📅 Sun, Aug 23, 2026 ▼"
  - text: Preferred Staff (Optional)
  - combobox:
    - option "Any available staff member" [selected]
    - option "Primary Specialist"
  - heading "3. Available Slots" [level=4]
  - text: All times shown in business timezone (UTC)
  - paragraph: No slots available for this date/service.
- contentinfo: Y Yarivo Appointments · yarivo.com © 2026 Yarivo. Global Appointment & Booking Platform.
- alert
```

# Test source

```ts
  1  | /**
  2  |  * Edge Case Test Suite: Concurrency, Rapid Actions & Navigation Interruption
  3  |  * Tests double-clicking, rapid tab switching, back/forward history, and state resetting.
  4  |  */
  5  | 
  6  | const { test, expect } = require('../../fixtures/base-fixture');
  7  | const { generateUniqueBusiness } = require('../../utils/string-helper');
  8  | 
  9  | test.describe('@edge Concurrency, Rapid Clicks & Navigation State', () => {
  10 |   let createdBusiness;
  11 | 
  12 |   test.beforeEach(async ({ apiClient }) => {
  13 |     createdBusiness = generateUniqueBusiness();
  14 |     const res = await apiClient.registerBusiness(createdBusiness);
  15 |     expect(res.ok).toBeTruthy();
  16 | 
  17 |     // Create a 2nd service to test service switching
  18 |     await apiClient.createService({
  19 |       name: 'Secondary Hair Color Service',
  20 |       durationMinutes: 60,
  21 |       price: 120,
  22 |       active: true,
  23 |     });
  24 |   });
  25 | 
  26 |   test('should reset selected slot when customer switches to a different service', async ({
  27 |     page,
  28 |     publicBookingPage,
  29 |   }) => {
  30 |     await publicBookingPage.goto('/');
  31 |     await publicBookingPage.selectBusinessByName(createdBusiness.name);
  32 | 
  33 |     // 1. Select first service and choose a slot
  34 |     await publicBookingPage.selectFirstAvailableSlot();
  35 |     const firstSlotText = await publicBookingPage.slotButtons.first().innerText();
  36 | 
  37 |     // 2. Switch to the second service
  38 |     await publicBookingPage.selectServiceByName('Secondary Hair Color Service');
  39 | 
  40 |     // 3. Verify that the previous slot selection was cleared and slots are reloaded
> 41 |     await expect(publicBookingPage.confirmBookingBtn).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  42 |     await publicBookingPage.fillCustomerDetails({
  43 |       name: 'Service Switcher',
  44 |       email: 'switcher@example.com',
  45 |     });
  46 | 
  47 |     // Attempting to submit without re-selecting a slot in the new service should trigger slot error
  48 |     await publicBookingPage.submitBooking();
  49 |     await publicBookingPage.expectFieldError('Please choose an appointment time slot');
  50 |   });
  51 | 
  52 |   test('should survive rapid tab navigation in Dashboard without broken states', async ({
  53 |     authenticatedOwner,
  54 |   }) => {
  55 |     const { dashboardPage } = authenticatedOwner;
  56 | 
  57 |     // Rapidly cycle through tabs
  58 |     for (let i = 0; i < 3; i++) {
  59 |       await dashboardPage.switchToServicesTab();
  60 |       await dashboardPage.switchToStaffTab();
  61 |       await dashboardPage.switchToHoursTab();
  62 |       await dashboardPage.switchToAppointmentsTab();
  63 |     }
  64 | 
  65 |     // Assert dashboard remains responsive and functional
  66 |     await expect(dashboardPage.appointmentsTabBtn).toBeVisible();
  67 |     await expect(dashboardPage.refreshAppointmentsBtn).toBeVisible();
  68 |   });
  69 | });
  70 | 
```