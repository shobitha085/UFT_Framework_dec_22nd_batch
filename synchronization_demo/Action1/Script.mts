WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2086607296_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "63e9d8d8791bc842c069" @@ hightlight id_;_2030272944_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").WaitProperty "enabled", true, 10000 @@ hightlight id_;_2031113792_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2026385480_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").WaitProperty "enabled", true, 10000 @@ hightlight id_;_2030275824_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1890958416_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").WaitProperty "visible", true, 10000 @@ hightlight id_;_1996497968_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 3,2 @@ hightlight id_;_2070490048_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").WaitProperty "visible", true, 10000 @@ hightlight id_;_2026386200_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2032532416_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "shobitha"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").WaitProperty "enabled", false, 10000 @@ hightlight id_;_1901548120_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2031109088_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 139 completed").WaitProperty "text", "Order 139 completed", 10000 @@ hightlight id_;_1918444560_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2032433384_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").WaitProperty "enabled", true, 10000 @@ hightlight id_;_2032432664_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_657618_;_script infofile_;_ZIP::ssf17.xml_;_
