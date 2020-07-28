(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{445:function(t,e,a){"use strict";a.r(e);var r=a(25),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pre-built-ssdts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-built-ssdts"}},[t._v("#")]),t._v(" Pre-Built SSDTs")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#power-management"}},[t._v("Power Management")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#embedded-controllers"}},[t._v("Embedded Controllers")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#trackpad"}},[t._v("Trackpad")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#backlight"}},[t._v("Backlight")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#system-clockawac"}},[t._v("System Clock(AWAC)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#nvrampmc"}},[t._v("NVRAM(PMC)")])])]),t._v(" "),a("p",[t._v("This is mainly for users who are having troubles either compiling, decompiling or understanding the overall process of ACPI. The main reasons you'd want to avoid is for the following:")]),t._v(" "),a("ul",[a("li",[t._v("Slowing down the boot process\n"),a("ul",[a("li",[t._v("Mainly because these SSDTs have to go through every possible pathing")]),t._v(" "),a("li",[t._v("At most, this only adds 2 seconds to the boot process, and does not affect macOS itself")])])]),t._v(" "),a("li",[t._v("Doesn't always work\n"),a("ul",[a("li",[t._v("The SSDTs provided can only handle so many situations, and some may in fact not work")]),t._v(" "),a("li",[t._v("Mainly seen with SSDT-AWAC, as it assumes there is a way the RTC can be easily enabled")])])]),t._v(" "),a("li",[t._v("Teaches nothing\n"),a("ul",[a("li",[t._v("This is the "),a("strong",[t._v("biggest")]),t._v(" issue as you have no real idea on how to troubleshoot or how to make these files down the line")])])])]),t._v(" "),a("p",[t._v("Please refer to "),a("RouterLink",{attrs:{to:"/ssdt-platform.html"}},[t._v("Choosing the SSDTs")]),t._v(" page for which your system needs.")],1),t._v(" "),a("h2",{attrs:{id:"power-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power-management"}},[t._v("#")]),t._v(" Power Management")]),t._v(" "),a("p",[t._v("For Haswell and newer:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-PLUG-DRTNIA"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("For Ivy Bridge and older, see the "),a("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/pm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optimizing Power Management page"),a("OutboundLink")],1),t._v(". This will be done "),a("em",[t._v("after")]),t._v(" install. AMD CPU users "),a("strong",[t._v("do not")]),t._v(" need any SSDTs for power management.")]),t._v(" "),a("h2",{attrs:{id:"embedded-controllers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embedded-controllers"}},[t._v("#")]),t._v(" Embedded Controllers")]),t._v(" "),a("p",[t._v("For desktops:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-EC-USBX-DESKTOP"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("For Skylake and newer and all AMD systems.")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-DESKTOP.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-EC-DESKTOP"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("For Broadwell and older.")])])])]),t._v(" "),a("p",[t._v("For laptops:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-LAPTOP.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-EC-USBX-LAPTOP"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("For Skylake and newer.")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-LAPTOP.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-EC-LAPTOP"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("For Broadwell and older.")])])])]),t._v(" "),a("h2",{attrs:{id:"trackpad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trackpad"}},[t._v("#")]),t._v(" Trackpad")]),t._v(" "),a("p",[t._v("Used for enabling Windows only features in macOS with I2C trackpads, do note that the below patches will more than likely break Windows booting via OpenCore(this issue is mitigated if booting by BIOS instead). We "),a("strong",[t._v("highly")]),t._v(" encourage you to make one yourself to prevent any issues down the line: "),a("RouterLink",{attrs:{to:"/Laptops/trackpad.html"}},[t._v("Trackpad GPI0")])],1),t._v(" "),a("p",[t._v("Note that PS2 keyboards and trackpads shouldn't need this SSDT+Patch.")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-XOSI"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/XOSI-Rename.plist",target:"_blank",rel:"noopener noreferrer"}},[t._v("XOSI-Rename.plist"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Note you'll need to add this into your config.plist under "),a("code",[t._v("ACPI -> Patch")]),t._v(":")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Comment")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Change _OSI to XOSI")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Enabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("YES")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Count")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Limit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Find")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5f4f5349")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Replace")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("584f5349")])])])]),t._v(" "),a("h2",{attrs:{id:"backlight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backlight"}},[t._v("#")]),t._v(" Backlight")]),t._v(" "),a("p",[t._v("For laptops and all-in-one desktops, fixies brightness control support")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PNLF.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-PNLF"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("For most users.")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PNLF-CFL.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-PNLF-CFL"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("For Coffee Lake and newer.")])])])]),t._v(" "),a("h2",{attrs:{id:"system-clock-awac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-clock-awac"}},[t._v("#")]),t._v(" System Clock(AWAC)")]),t._v(" "),a("p",[t._v("Mainly needed for newer systems running AWAC based system clocks, mainly relevant for Z390 and newer(Gigabyte and AsRock however did back-port it to Z370 with a BIOS update)")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-AWAC.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-AWAC"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("The biggest issue with this prebuilt is that we're just guessing you both have an AWAC clock and that it can be turned off, I "),a("strong",[t._v("highly")]),t._v(" encourage you to make one yourself to really know whether you both need this and if it's going to work: "),a("RouterLink",{attrs:{to:"/Universal/awac.html"}},[t._v("AWAC vs RTC")])],1),t._v(" "),a("h2",{attrs:{id:"nvram-pmc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvram-pmc"}},[t._v("#")]),t._v(" NVRAM(PMC)")]),t._v(" "),a("p",[t._v("Needed to bring back NVRAM support for Z390 , "),a("strong",[t._v("DO NOT USE ON Z370 or older or Z490 and newer")])]),t._v(" "),a("p",[t._v("Note: Desktop Z490 boards seem to not need this, though if you're having NVRAM issues you can try this SSDT.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PMC.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-PMC"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Reminder only the following need this SSDT:")]),t._v(" "),a("ul",[a("li",[t._v("B360")]),t._v(" "),a("li",[t._v("B365")]),t._v(" "),a("li",[t._v("H310")]),t._v(" "),a("li",[t._v("H370")]),t._v(" "),a("li",[t._v("Z390")])]),t._v(" "),a("h2",{attrs:{id:"usb-rhub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb-rhub"}},[t._v("#")]),t._v(" USB(RHUB)")]),t._v(" "),a("p",[t._v("Needed for 10th gen Asus motherboards, Gigabyte and AsRock motherboards don't need this:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-RHUB.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-RHUB.aml"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);