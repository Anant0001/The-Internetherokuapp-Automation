
const dragAndDrop = require('html-dnd').codeForSelectors;
const path = require('path');
const { assert } = require("chai");

describe("here we will test the functionalty of the multiple scenarios ",()=>{
    before("",async()=>{
        await  browser.url("http://the-internet.herokuapp.com/")
        await  browser.maximizeWindow()
        
        await browser.pause(6000)
    })
    
    xit("home page testing",async()=>{
        const el1=await browser.$("//h2[text()='Welcome to the-internet']")
        assert.equal("Weclome to the-internet",el1,'correct ');
    
    })

    xit("A/B testing ",async()=>{
        const test1=await   $("//a[text()='A/B Testing']")
         test1.click()
        const heading=await $("//div[@id='content']//div//p").isDisplayedInViewport()
        await console.log(heading)
        console.log(await browser.$("//div[@id='content']//div//p"))
        await browser.pause(8000)
        await browser.back()
        await browser.pause(8000)
    })
//  ADD AND REMOVE ELEMENTS
    xit("add and remove elements scenario",async()=>{
        const test2= await $("//a[text()='Add/Remove Elements']")
        test2.click()
        const message100=await $("//h3[text()='Add/Remove Elements']")
        await expect(message100).toExist()

        await browser.$("//button[text()='Add Element']").click()
        await browser.pause(7000)


         const message101=await $("//button[text()='Delete']")
         await expect(message101).toBeDisplayed()

         await browser.$("//button[text()='Delete']").click()
         await browser.pause(7000)

         const message102=await $("//h3[text()='Add/Remove Elements']")
         await expect(message102).toBeDisplayed()

         const heading2=await browser.$("//button[text()='Delete']").isDisplayedInViewport()
         console.log(heading2)
         
        
         await browser.back()
         await browser.pause(7000)
    })
// BASIC AUTHENTICATION
    xit("Basic Authentication",async()=>{
        await browser.$("//a[text()='Basic Auth']").click()
        await browser.pause(7000)

        await browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        console.log(await browser.$("//div[@ class='example']").isDisplayedInViewport())

        const message103=await $('p')
        await expect(message103).toBeDisplayed()
        console.log(await message103.getText())
        await browser.pause(8000)

        await browser.back()
        await browser.back()
        await browser.pause(7000)
    })
    xit("Checkbox scenario",async()=>{
        await browser.$("//a[text()='Checkboxes']").click()
        await browser.pause(8000)
        await browser.$("//form[@id='checkboxes']//input[1]").click()
        await browser.pause(8000)
        await browser.$("//form[@id='checkboxes']//input[2]").click()
        await browser.pause(8000)
        await browser.$("//form[@id='checkboxes']//input[1]").click()
        await browser.pause(8000)
        await browser.$("//form[@id='checkboxes']//input[2]").click()
        await browser.pause(8000)

        console.log("checkbox is checked successfully")
        await browser.back()
    })
   xit("Context menu scenario ",async()=>{

        await browser.$("//a[text()='Context Menu']").click()
        await browser.pause(5000)
        await browser.rightClick($("#hot-spot"))/*this is not completed */
         await browser.pause(3000)

    })

    xit("Disappearing Elements",async()=>{
        await browser.$("//a[text()='Disappearing Elements']").click()
        await browser.pause(8000)
        const message104=await $("//a[text()='Gallery']")
        // await browser.refresh()
        await browser.refresh()
        await browser.pause(8000)
        await expect(message104).toBeDisplayed()
        
        await browser.refresh()
        await browser.pause(8000)
        await expect(message104).not.toBeDisplayed()
        await browser.back()
        console.log("this scenario is successfull")
        
    })


    xit("Drag and Drop functionality scenario",async()=>{
        await browser.$("//a[text()='Drag and Drop']").click()
        await browser.pause(7000)
        const message105=await $('h3')
        expect(message105).toBeDisplayed()
        const element=  await browser.$("#column-a")
        const target= await browser.$("#column-b")
        await browser.execute(dragAndDrop, "#column-a", "#column-b");
        // await element.dragAndDrop(target,{duration: 5000})
        // await element.dragAndDrop({ x: 100, y: 200 })
        // $("#column-a").dragAndDrop(browser.$("#column-b"), { x: 100, y: 200 })
        await browser.pause(7000)

        await browser.back()
        await browser.pause(7000)

        
    })

    xit("drop down functionality scenario",async ()=>{

        await browser.$("//a[text()='Dropdown']").click()

        const message106=await $(('h3'))
        await expect(message106).toBeDisplayed()
        console.log(await message106.getText())
        await browser.pause(8000)
        await browser.$("#dropdown").click()
        await browser.pause(8000)
        await browser.$("//option[text()='Option 1']").click()
        await browser.pause(8000)

        await browser.$("//option[text()='Option 2']").click()
        await browser.pause(8000)
        await browser.back()
        await browser.pause(8000)
    })


    xit("checking the functionality of Dynamic Content",async ()=>{

        await browser.$("//a[text()='Dynamic Content']").click()

        await browser.pause(8000)
        const message107=await $('.large-10 columns')
        console.log(message107.getText())
        // await browser.$("//a[text()='click here']").click()
        await browser.refresh()
        await browser.pause(8000)
        console.log(message107.getText())
        // await browser.$("//a[text()='click here']").click()
        await browser.refresh()
        await browser.pause(8000)

        await browser.navigateTo("http://the-internet.herokuapp.com/")
        await browser.pause(8000)

    })
    xit("Dynamic controls",async ()=>{

        await browser.$("//a[text()='Dynamic Controls']").click()
        await browser.pause(8000)

        // const id=await $("#checkbox-example")
        // await browser.switchToFrame(id)
        
        await browser.$("//div[@id='checkbox']//input").click()
        await browser.pause(8000)
        await browser.$("//button[text()='Remove']").click()
        
        const message108=await $('p')
        expect(message108).toBeDisplayed()
        console.log(await message108.getText())
        await browser.pause(5000)
        await browser.$("//button[text()='Add']").click()
        expect(message108).toBeDisplayed()
        console.log(await message108.getText())
        await browser.pause(8000)

        // await browser.$("//button[text()='Enable']").click()
        // const id1= await $("#input-example")
        // await browser.switchToFrame(id1)
        // const message109= await $('p')
        // expect(message108).toBeDisplayed()
        // console.log(message109.getText())
        // await browser.pause(8000)

       

        // await browser.$("//button[text()='Disable']")
        // expect(message108).toBeDisplayed()
        // console.log(message109.getText())
        // await browser.pause(8000)

        // await browser.back()
    })/*  This is having some problem*/

    
    xit("Dynamic loading of the page ",async ()=>{

        await browser.$("//a[text()='Dynamic Loading']").click()
        await browser.pause(8000)
        
        await browser.$("//a[text()='Example 1: Element on page that is hidden']").click()
        await browser.pause(8000)

        await browser.$("//button[text()='Start']").click()
        await browser.pause(8000)

        const cont=await $("//h4[text()='Hello World!']")
        expect(cont).toBeDisplayed()
        console.log(await cont.getText())

        await browser.back()
        // await browser.back()
        await browser.pause(8000)


        await browser.$("//a[text()='Example 2: Element rendered after the fact']").click()
        await browser.pause(8000)

        await browser.$("//button[text()='Start']").click()
        await browser.pause(8000)

        const cint1=await browser.$("//h4[text()='Hello World!']")
        expect(cint1).toBeDisplayed()
        console.log(await cint1.getText())

        await browser.back()
        await browser.back()
    })

    
    xit("Entry Ad scenario",async ()=>{

        await browser.$("//a[text()='Entry Ad']").click()
        await browser.pause(8000)


        await browser.$("//p[text()='Close']").click()
        await browser.pause(8000)

        // await browser.$("//a[text()='click here']").click()
        // await browser.refresh()
        // await browser.pause(5000)

        // await browser.$("//p[text()='Close']").click()
        const display=await $("//p[text()='Displays an ad on page load.']")
        expect(display).toBeDisplayed()
        await browser.pause(8000)

        await browser.back()
        await browser.pause(8000)
    })
// FILE DOWNLOAD
    
    xit("File Download scenario",async ()=>{

        await browser.$("//a[text()='File Download']").click()
        await browser.pause(8000)


        await browser.$("//a[text()='image.jpg']").click()
        await browser.pause(8000)

        await browser.back()
        await browser.pause(8000)
    })

    // FILE UPLOAD
    xit("File upload",async ()=>{

        // await $("//a[text()='File Upload']").click()
        await browser.url('http://the-internet.herokuapp.com/upload')
    // const input=await $('#file-upload')
    // const submit=await $('#file-submit')
    const filepath=path.join(__dirname,'hello.txt')
    // const remotepath=await browser.uploadFile(filepath)
    
    // await input.setValue(remotepath)
    // await submit.click()
    await $('#file-upload').setValue(filepath)
    await browser.pause(15000)
    // expect(await $('#file-upload')).toBeDisplayed()
    // await $('#file-upload').keys("C:\\Users\\anant.t\\Downloads\\hello.txt".split(""))
    // await browser.pause(15000)
    await $('#file-submit').click()
        await browser.pause(8000)

        // const msg=await browser.$("//h1[text()='Internal Server Error']").isDisplayedInViewport()
       
        // console.log(await msg)

        // await browser.back()
        await browser.back()
        await browser.pause(8000)

        
    })
    // FORGOT PASSWORD
    xit("Forgot password scenario",async ()=>{

        await browser.$("//a[text()='Forgot Password']").click()
        await browser.pause(8000)
        const forgot = await $('h2')
        expect(forgot).toBeDisplayed()
        console.log(await forgot.getText())

        const email=await browser.$("#email")
        await email.setValue("xyz@yopmail.com")
        await browser.keys('Enter')
        await browser.pause(8000)

        const msg1=await $('h1')
        expect(msg1).toBeDisplayed()
        console.log(await msg1.getText())
        await browser.back()
        await browser.back()
        await browser.pause(8000)
    })
    // AUTHENTICATION
    xit("form authentication scenario",async ()=>{

        await browser.$("//a[text()='Form Authentication']").click()
        await browser.pause(8000)


        console.log(await $("//h2[text()='Login Page']").getText())
        const h4=await $('h4')
        expect(h4).toBeDisplayed()
        console.log(await h4.getText())
        await browser.pause(8000)

        const uname=await browser.$("#username")
        uname.setValue("tomsmith")
       const pass= await browser.$("#password")
       pass.setValue("SuperSecretPassword!")
       await $("//button[@type='submit']").click()
        // await browser.keys('Enter')
        await browser.pause(8000)

    //     console.log(await browser.$("//i[text()=' Secure Area']"))
    //     await browser.$("//i[text()=' Logout']").click()
    //     await browser.pause(5000)

    //     await browser.back()
    //     await browser.pause(6000)

    // THERE IS PROBLEM IN THIS SCENARIO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    })
    // FRAMES
    xit("frames",async ()=>{

        await browser.$("//a[text()='Frames']").click()
        await browser.pause(8000)

// This is for the nested frames 
        await browser.$("//a[text()='Nested Frames']").click()
        await browser.pause(8000)

        await browser.back()
        await browser.pause(8000)
// This is for the iframe section
            await browser.$("//a[text()='iFrame']").click()
        await browser.pause(8000)

        const id=await $("#mce_0_ifr")
        await browser.switchToFrame(id)
        
        const write=await browser.$("//p[text()='Your content goes here.']")
         await write.setValue("Hello this scenario is working properly" ,['Meta', 'A'])
        await browser.pause(8000)
         // await browser.$()
         // await browser.$()
        // await browser.$()
        await browser.back()
        await browser.pause(8000)

        await browser.back()
        await browser.pause(8000)
    })
    // HORIZONTAL SLIDER
xit("horizontal slider",async()=>{



    await browser.$("//a[text()='Horizontal Slider']").click()
    
    
    
    await browser.pause(8000)
   await $("//input[@type = 'range']").click()
   await browser.pause(2000)
    while(!(await $("//span[text() = 5]").isDisplayed())) {
    
    
    
    await browser.keys("ArrowRight")
    
    
    }
    await browser.pause(3000)
    
})
// HOVER FUNCTIONALITY
xit("hover functionality",async()=>{

    await browser.$("//a[text()='Hovers']").click()
    const hover=await $(".example")
    expect(hover).toBeDisplayed()
    console.log(await hover.getText())
    await browser.pause(8000)

    await browser.$("//div[@id='content']//div//div").moveTo()
    await browser.pause(8000)
    await browser.$("//div[@id='content']//div//div[2]").moveTo()
    await browser.pause(8000)

    await browser.$("//div[@id='content']//div//div[3]").moveTo()
    await browser.pause(8000)

    await browser.back()
})
// Inputs
xit("Input Scenario",async()=>{

    await $("//a[text()='Inputs']").click()
    await browser.pause(8000)

    const number=await $("//input[@type='number']")
    number.setValue("54")
    await browser.pause(8000)
})
// JQuery Selector
xit("JQuery Selector",async()=>{

    await $("//a[text()='JQuery UI Menus']").click()
    await browser.pause(7000)

    await $("//a[text()='JQuery UI Menus']").click()
    await browser.pause(7000)
    await browser.back()

    await $("//a[text()='Enabled']").click()
    await browser.pause(6000)
    await $("//a[text()='Downloads']").click()
    await browser.pause(6000)
    await $("//a[text()='Back to JQuery UI']").click()
    await browser.pause(6000)

    await $("//a[text()='Menu']").click()

    await browser.pause(7000)

})

// JQuery Alert
xit("JQuery Alert",async()=>{

    await $("//a[text()='JavaScript Alerts']").click()
    await browser.pause(7000)

    // await $("//button[text()='Click for JS Alert']").click()
    // await browser.pause(7000)

    // await browser.acceptAlert()

    // await $("//button[text()='Click for JS Confirm']").click()
    // await browser.pause(7000)

    // await browser.acceptAlert()

    await $("//button[text()='Click for JS Prompt']").click()
    await browser.pause(7000)
    await browser.sendAlertText("Hi Anant Tyagi")
    await browser.acceptAlert()
    await browser.pause(7000)

    await browser.back()
    await browser.pause(7000)
})
// KEY PRESSES
xit("Key press",async()=>{
await browser.$("//a[text()='Key Presses']").click()
$('#target').click()
await browser.keys('Enter')
await browser.pause(7000)

await browser.back()
await browser.pause(7000)

})
// MULTIPLE WINDOW
xit("Multiple Window",async()=>{
    await browser.$("//a[text()='Multiple Windows']").click()
    await browser.pause(7000)

    await browser.$("//a[text()='Click Here']").click()
    await browser.pause(7000)

    await browser.navigateTo("http://the-internet.herokuapp.com/")
})
// THIS IS FOR THE NOTIFICATION MESSAGES
xit("Notification  messsage scenario",async()=>{
await browser.$("//a[text()='Notification Messages']").click()
await browser.pause(7000)

const message82=await browser.$('h3')
console.log(message82.getText())
await browser.pause(6000)

await browser.$("//a[text()='Click here']").click()
await browser.pause(6000)
await browser.navigateTo("http://the-internet.herokuapp.com/")
await browser.pause(6000)

})
// THIS IS FOR THE SHIFTING CONTENT
xit("Shifting content",async()=>{
await browser.$("//a[text()='Shifting Content']").click()
const message86= await $('p')
console.log(await message86.getText())
await browser.pause(8000)

// menu element shifting 
await browser.$("//a[text()='Example 1: Menu Element']").click()
await browser.pause(8000)

const message85=await $('h3')
console.log(await message85.getText())
 await browser.$("//a[text()='click here']").click()
 await browser.pause(8000)

 await browser.$("//a[text()='click here']").click()
 await browser.pause(8000)

 await browser.navigateTo("http://the-internet.herokuapp.com/shifting_content")
//  for an image
 await browser.$("//a[text()='Example 2: An image']").click()
 await browser.pause(8000)
 await browser.$("//div[@id='content']//p//a[text()='click here']").click()
 await browser.pause(8000)
 await browser.$("//div[@id='content']//p//a[text()='click here']").click()
 await browser.pause(8000)

 await browser.navigateTo("http://the-internet.herokuapp.com/shifting_content")
//  list scenario

await browser.$("//a[text()='Example 3: List']").click()
const message84=await $(".large-6columns large-centered")
console.log(message84.getText())
await browser.pause(8000)

await browser.refresh()
await browser.pause(8000)               /*THIS LIST PART IS NOT WORKING PROPERLY*/

await browser.refresh()
await browser.pause(8000)

await browser.refresh()
await browser.pause(8000)

await browser.back()
await browser.back()
await browser.pause(8000)
})
// THIS IS FOR THE STATUS CODE AS WELL AS THE REDIRECT LINK 
xit("Status code scenario",async()=>{
    // redirect link
await browser.$("//a[text()='Redirect Link']").click()
await browser.pause(5000)
const message83= await $('p')
console.log(message83.getText())

await browser.$("#redirect").click()
// await browser.$("//a[text()='Status Codes']").click()
// Status code scenario
await browser.$("//a[text()='200']").click()

const message90=await $('p')
console.log(await message90.getText())
await browser.pause(8000)

await browser.$("//a[text()='here']").click()
await browser.pause(8000)

await browser.$("//a[text()='301']").click()
const message89=await $('p')
console.log(await message89.getText())
await browser.pause(8000)

await browser.$("//a[text()='here']").click()
await browser.pause(8000)

await browser.$("//a[text()='404']").click()
const message88=await $('p')
console.log(await message88.getText())
await browser.pause(8000)

await browser.$("//a[text()='here']").click()
await browser.pause(8000)

await browser.$("//a[text()='500']").click()
const message87=await $('p')
console.log(await message87.getText())
await browser.pause(8000)

await browser.navigateTo("http://the-internet.herokuapp.com/")
await browser.pause(8000)
})
});