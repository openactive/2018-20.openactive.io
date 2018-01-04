---
title: Forms
position: 4
is_main_navigation: true
layout: page
---


<div class="block two">
 <form>
      <fieldset>
        <legend>Fruit juice size</legend>
        <p>
          <input type="radio" name="size" id="size_1" value="small">
          <label for="size_1">Small</label>
        </p>
        <p>
          <input type="radio" name="size" id="size_2" value="medium">
          <label for="size_2">Medium</label>
        </p>
        <p>
          <input type="radio" name="size" id="size_3" value="large">
          <label for="size_3">Large</label>
        </p>
      </fieldset>
    </form>
</div>
<div class="block two">
  
    <ul id="errors" class="">
        <li id="info">There were some problems with your form submission:</li>
    </ul>
    <p id="success">Thanks for your message! We will get back to you ASAP!</p>
    <form method="post" action="process.php">
        <label for="name">Name: <span class="required">*</span></label>
        <input type="text" id="name" name="name" value="" placeholder="John Doe" required="required"
               autofocus="autofocus"/>

        <label for="email">Email Address: <span class="required">*</span></label>
        <input type="email" id="email" name="email" value="" placeholder="johndoe@example.com" required="required"/>

        <label for="telephone">Telephone: </label>
        <input type="tel" id="telephone" name="telephone" value=""/>

        <label for="enquiry">Enquiry: </label>
        <select id="enquiry" name="enquiry">
            <option value="general">General</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
        </select>

        <label for="message">Message: <span class="required">*</span></label>
        <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters"
                  required="required" data-minlength="20"></textarea>

        <label for="password">Password</label>
        <input type="password" placeholder="Password">
        
            
        <span id="loading"></span>
        <input type="submit" value="Holla!" class="primary_cta"/>
        <p id="req-field-desc"><span class="required">*</span> indicates a required field</p>
        <form method="post">
                <fieldset>
                        <legend>What is Your Favorite Pet?</legend>
                                <input type="radio" name="animal" value="Cat" />Cats<br />
                                <input type="radio" name="animal" value="Dog" />Dogs<br />
                                <input type="radio" name="animal" value="Bird" />Birds<br />
                                <input type="submit" value="Submit now" />
                </fieldset>
        </form>
    </form>
    
  
</div>

   
    
    
