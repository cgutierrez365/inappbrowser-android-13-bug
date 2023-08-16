/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// var cordova;
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // window.open = cordova.InAppBrowser.open;
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    createPDF();
    openPDF();
}

let testPDF;
function createPDF() {

    let html = "Testing PDF"

    testPDF = pdf.fromData(html, { type: 'base64', fileName: 'healthreport.pdf' })
    .then((status) => console.log('createPDF success->', status))
    .catch((error) => console.log(error));

    console.log(testPDF)
}


function openPDF() {

    //Had to change function name to "open" and final argument to a string with no spaces with attributes separated by a comma
    // let path = 'pages/appmarketplace'
    // cordova.InAppBrowser.open('https://www.orchyd.com/' + path + '?appEmbedded=true', '_blank', 'location=no,toolbar=no,presentationstyle=pagesheet');

    cordova.InAppBrowser.open(testPDF, '_blank', 'location=no,presentationstyle=fullscreen,toolbarcolor=#ffffff,toolbarposition=top,hidenavigationbuttons=yes,closebuttoncolor=#6973E5')
    
}
