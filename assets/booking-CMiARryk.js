import{l as Rt,s as _t,c as Ht,i as Ft}from"./core-BQg2YDUh.js";const W="The Full Overland Transfer: Ditch the transit stress entirely. Join the main group from our central Guwahati lounge for an epic, ice-breaking overnight road trip straight into the mountains.",K="The ultimate budget-smart hack. We pick you up right from the Naharlagun railway station in a shared Tata Sumo (comfortably seating a crew of 9–10 cool travellers) for a scenic 3-hour journey up the ridges.",V="The ultimate time-saver shortcut. If you manage to snare a seat on the limited direct flights servicing Donyi Polo Airport (Holongi), you'll completely bypass the gruelling 9-hour overland haul. We'll pick you up right from the arrival terminal for a crisp, scenic 4-hour mountain drive (roughly 100 km) straight up into the valley.",j={key:"3n4d",label:"3 Night 4 Days",rate:0},T={key:"4n5d",label:"4 Night 5 Days",rate:0},Q={key:"5n6d",label:"5 Night 6 Days",rate:0},y={soloDome:"/tents/solo-dome.png",doubleDome:"/tents/double-dome.png",twinAlpine:"/tents/twin-alpine.png",tripleAlpine:"/tents/triple-alpine.png"},Gt=["Breakfast & Dinner Included","Insulated camping foam mat, pillow & blanket","24×7 On-site Assistance"],Mt=["Breakfast & Dinner Included","Insulated camping foam mat, pillows & blankets","24×7 On-site Assistance"],mt=["Breakfast & Dinner Included","Thick mattress, premium linens, pillows & blankets","24×7 On-site Assistance"];function S(t,e,n,o,a,i,r,f,c,g=!1){return{id:t,name:e,group:n,packageType:o,image:a,pax:i,description:r,inclusions:f,options:c,isPremium:g}}const Ut=["Ziro Campsite","Guwahati Central","Naharlagun Station","Holongi Airport"],v=[S("solo-dome","Solo Dome Tent","Ziro Campsite","Comfort",y.soloDome,1,"Perfect for solo festival-goers seeking their own private space after a day of music and adventure. A simple, comfortable setup designed for a restful night’s sleep.",Gt,[{...j,rate:7500},{...T,rate:9e3}]),S("classic-dome-double","Classic Dome Tent – Double Sharing","Ziro Campsite","Comfort",y.doubleDome,2,"An affordable and comfortable stay for two. Spacious, weatherproof dome tents with everything you need for a relaxed festival experience.",Mt,[{...j,rate:6e3},{...T,rate:8e3}]),S("premium-alpine-twin","Premium Alpine Tent – Twin Sharing","Ziro Campsite","Luxury",y.twinAlpine,2,"Designed for guests who prefer extra comfort, space and upgraded bedding. Enjoy a premium camping experience without giving up the charm of the outdoors.",mt,[{...j,rate:7500},{...T,rate:1e4}]),S("premium-alpine-triple","Premium Alpine Tent – Triple Sharing","Ziro Campsite","Luxury",y.tripleAlpine,3,"The perfect choice for groups of three looking for a spacious, premium stay. Comfortable bedding and generous interiors make it ideal for friends travelling together.",mt,[{...j,rate:6750},{...T,rate:9e3}]),S("guwahati-solo-dome","Guwahati Central Solo Dome Tent","Guwahati Central","Premium",y.soloDome,1,W,[],[{...Q,rate:23e3}],!0),S("guwahati-double-dome","Guwahati Central Double Sharing Dome Tent","Guwahati Central","Premium",y.doubleDome,2,W,[],[{...Q,rate:23e3}],!0),S("guwahati-alpine-twin","Guwahati Central Alpine Tent Twin Sharing","Guwahati Central","Premium",y.twinAlpine,2,W,[],[{...Q,rate:25e3}],!0),S("guwahati-alpine-triple","Guwahati Central Alpine Tent Triple Sharing","Guwahati Central","Premium",y.tripleAlpine,3,W,[],[{...Q,rate:25e3}],!0),S("naharlagun-solo-dome","Naharlagun Station Solo Dome Tent","Naharlagun Station","Premium",y.soloDome,1,K,[],[{...T,rate:13600}],!0),S("naharlagun-double-dome","Naharlagun Station Double Sharing Dome Tent","Naharlagun Station","Premium",y.doubleDome,2,K,[],[{...T,rate:13600}],!0),S("naharlagun-alpine-twin","Naharlagun Station Alpine Tent Twin Sharing","Naharlagun Station","Premium",y.twinAlpine,2,K,[],[{...T,rate:15500}],!0),S("naharlagun-alpine-triple","Naharlagun Station Alpine Tent Triple Sharing","Naharlagun Station","Premium",y.tripleAlpine,3,K,[],[{...T,rate:15500}],!0),S("holongi-solo-dome","Holongi Airport Solo Dome Tent","Holongi Airport","Premium",y.soloDome,1,V,[],[{...T,rate:13600}],!0),S("holongi-double-dome","Holongi Airport Double Sharing Dome Tent","Holongi Airport","Premium",y.doubleDome,2,V,[],[{...T,rate:13600}],!0),S("holongi-alpine-twin","Holongi Airport Alpine Tent Twin Sharing","Holongi Airport","Premium",y.twinAlpine,2,V,[],[{...T,rate:15500}],!0),S("holongi-alpine-triple","Holongi Airport Alpine Tent Triple Sharing","Holongi Airport","Premium",y.tripleAlpine,3,V,[],[{...T,rate:15500}],!0)];function F(t,e){return t.options.find(n=>n.key===e)||t.options[0]}function bt(t){for(const e of t){if(!e.selected)continue;const n=v.find(o=>o.id===e.id);if(n)return n.isPremium?"premium":"campsite"}return null}function ht(t,e){const n=e.find(a=>a.id===t.id);if(n!=null&&n.selected)return!0;const o=bt(e);return o?o==="premium"?t.isPremium:!t.isPremium:!0}function kt(t,e){let n=0;return t.forEach(o=>{if(o.id===e.id)return;const a=v.find(r=>r.id===o.id);if(!a||!o.selected)return;(e.isPremium&&!a.isPremium||!e.isPremium&&a.isPremium)&&(o.selected=!1,n+=1)}),n}function Wt(t){const e=new Set;return t.forEach(n=>{if(!n.selected)return;const o=v.find(a=>a.id===n.id);o&&e.add(o.isPremium?"premium":"campsite")}),e.size>1}function Kt(t){return t.some(e=>e.selected&&e.quantity>0)}function D(t){return Kt(t)?t.some(e=>{if(!e.selected)return!1;const n=v.find(o=>o.id===e.id);return n&&!n.isPremium}):!0}function N(t){const e=D(t);return{labels:e?["Select Packages","Daytime Add-ons","Summary & Pay"]:["Select Packages","Summary & Pay"],totalSteps:e?3:2,showAddons:e}}function yt(t,e){const{showAddons:n}=N(e);return n?t:t===1?1:3}function L(t,e){return t===N(e).totalSteps}function st(t,e){const{showAddons:n}=N(e);return n&&t===2}const R=[{id:"shivalinga",title:"Sidheshwar Nath Temple & Seeh Lake",dateLabel:"Sept 25",description:"Journey deep into dense, forested Kardo Hills to stand in awe before the world's highest naturally formed Shiva Linga—a sacred and powerful spiritual site hidden within the mountain mist. Follow this divine experience with a scenic visit to the tranquil, pine-ringed waters of Seeh Lake.",rate:500},{id:"fishing",title:"Traditional Paddy Field Fishing",dateLabel:"Sept 26",description:"Wade into the terraced fields and learn the traditional Apatani art of catching fish with your bare hands.",rate:1e3},{id:"heritage-walk",title:"Guided Indigenous Village Walk & Winery Trail",dateLabel:"Sept 27",description:"Take a guided heritage walk through villages like Hong and Hari to witness the Apatani's sustainable agriculture, signature bamboo architecture, and unique traditional facial tattoos across a stunning landscape currently featured on the UNESCO World Heritage list. Wrap up the trail with a visit to the Shark Tank India famous family-run Naara Aaba Winery—India's first commercial kiwi winery—for an exclusive tasting of locally sourced fruit and berry wines. A must-visit for culture seekers and wine enthusiasts alike!",rate:1500}];function Y(t){return t.dateLabel?`${t.title} (${t.dateLabel})`:t.title}const Vt="/images/payment/ezar-endeavors-qr.png",jt="https://ziro-backend-3qdz.onrender.com/api/booking",Qt="wildnestadventures@gmail.com",Zt={Comfort:"booking-type--comfort",Luxury:"booking-type--luxury",Premium:"booking-type--premium"};function u(t){return`₹${t.toLocaleString("en-IN")}`}const H=1,J=20;function St(t){return Math.min(J,Math.max(H,Number(t)||H))}function Yt(t,e,n){const o=n?"":"disabled",a=!n||e<=H?"disabled":"",i=!n||e>=J?"disabled":"";return`
    <div class="booking-qty-stepper">
      <button type="button" class="booking-qty-btn tent-qty-minus" data-tent-id="${t.id}" aria-label="Decrease quantity for ${t.name}" ${a}>−</button>
      <input type="number" class="booking-qty tent-qty" data-tent-id="${t.id}" min="${H}" max="${J}" value="${e}" ${o} aria-label="Quantity for ${t.name}" />
      <button type="button" class="booking-qty-btn tent-qty-plus" data-tent-id="${t.id}" aria-label="Increase quantity for ${t.name}" ${i}>+</button>
    </div>`}function _(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function C(t){return _(t)}function Jt(t=new Date){return t.toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})}function Xt(t,e={}){const{totalPax:n=t.packages.reduce((g,k)=>g+k.totalNoOfPax,0),premiumAddonsIncluded:o=!1,submittedAt:a=Jt(),bookingRef:i=""}=e,r=i?`<p class="booking-confirmation-meta">Booking reference: ${C(i)}</p>`:"",f=t.packages.map(g=>`
        <tr>
          <td>${C(g.packageName)}</td>
          <td>${g.quantity}</td>
          <td>${u(g.ratePerPax)}</td>
          <td>${g.totalNoOfPax}</td>
          <td>${u(g.totalPrice)}</td>
        </tr>`).join("");let c;return o?c=`
      <section class="booking-confirmation-section">
        <h3>Daytime Add-ons</h3>
        <p class="booking-confirmation-note">Included with Premium package</p>
      </section>`:t.addOns.length?c=`
      <section class="booking-confirmation-section">
        <h3>Daytime Add-ons</h3>
        <div class="booking-confirmation-table-wrap">
          <table class="booking-confirmation-table">
            <thead>
              <tr>
                <th scope="col">Add-on</th>
                <th scope="col">Pax</th>
                <th scope="col">Rate / Pax</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>${t.addOns.map(k=>`
          <tr>
            <td>${C(k.addOnName)}</td>
            <td>${k.totalNoOfPax}</td>
            <td>${u(k.ratePerPax)}</td>
            <td>${u(k.totalPrice)}</td>
          </tr>`).join("")}</tbody>
          </table>
        </div>
      </section>`:c=`
      <section class="booking-confirmation-section">
        <h3>Daytime Add-ons</h3>
        <p class="booking-confirmation-note">No add-ons selected</p>
      </section>`,`
    <article class="booking-confirmation" id="booking-confirmation">
      <header class="booking-confirmation-header">
        <span class="booking-confirmation-badge">Booking Confirmed</span>
        <h2>Your Booking Summary</h2>
        <p>Thank you, <strong>${C(t.contactName)}</strong>. We have received your booking request and will confirm within 24 hours.</p>
        <p class="booking-confirmation-meta">Submitted on ${C(a)}</p>
        ${r}
      </header>

      <div class="booking-confirmation-sheet">
        <section class="booking-confirmation-section">
          <h3>Contact Details</h3>
          <dl class="booking-confirmation-details">
            ${t.preferred_date?`<div><dt>Preferred Dates</dt><dd>${C(t.preferred_date)}</dd></div>`:""}
            <div><dt>Primary Contact</dt><dd>${C(t.contactName)}</dd></div>
            <div><dt>Contact Number</dt><dd>${C(t.contactNo)}</dd></div>
            <div><dt>Email</dt><dd>${C(t.ContactEmail)}</dd></div>
            <div><dt>Transaction ID</dt><dd>${C(t.transactionNo)}</dd></div>
            <div><dt>Vegetarian Pax</dt><dd>${t.totalVegetarian} of ${n}</dd></div>
            <div><dt>Total Travellers</dt><dd>${n}</dd></div>
          </dl>
        </section>

        <section class="booking-confirmation-section">
          <h3>Packages</h3>
          <div class="booking-confirmation-table-wrap">
            <table class="booking-confirmation-table">
              <thead>
                <tr>
                  <th scope="col">Package</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Rate / Pax</th>
                  <th scope="col">Total Pax</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>${f}</tbody>
            </table>
          </div>
        </section>

        ${c}

        <section class="booking-confirmation-section booking-confirmation-section--totals">
          <h3>Payment Summary</h3>
          <div class="booking-confirmation-totals">
            <div class="booking-confirmation-total-row">
              <span>Order Subtotal</span>
              <strong>${u(t.totalAmount)}</strong>
            </div>
            <div class="booking-confirmation-total-row">
              <span>Booking Fee Paid (50%)</span>
              <strong>${u(t.bookingAmount)}</strong>
            </div>
            <div class="booking-confirmation-total-row">
              <span>Balance Due at Camp</span>
              <strong>${u(t.balance)}</strong>
            </div>
            <div class="booking-confirmation-total-row booking-confirmation-total-row--grand">
              <span>Amount Paid Now</span>
              <strong>${u(t.bookingAmount)}</strong>
            </div>
          </div>
        </section>

        <footer class="booking-confirmation-footer">
          <p><strong>Wildnest Adventures</strong> · Ziro Festival 2026 · 24 – 27 September 2026</p>
          <p>+918822659172 · wildnestadventures@gmail.com</p>
          <p>&copy; Ezar Endeavors &amp; Wildnest Adventures</p>
        </footer>
      </div>

      <div class="booking-confirmation-actions no-print">
        <button type="button" class="btn btn-primary" id="booking-print-btn">Print Summary</button>
        <a href="/booking.html" class="btn btn-outline">Make Another Booking</a>
      </div>
    </article>`}function zt(t,e,n={}){var i,r;document.body.classList.add("booking-confirmed"),me();const o=document.querySelector(".page-hero--booking h1"),a=document.querySelector(".page-hero--booking p");o&&(o.textContent="Booking Confirmed"),a&&(a.textContent="Your reservation summary is below. Save or print this page for your records."),t.innerHTML=Xt(e,n),(i=t.querySelector("#booking-print-btn"))==null||i.addEventListener("click",()=>{window.print()}),(r=document.getElementById("booking-confirmation"))==null||r.scrollIntoView({behavior:"smooth",block:"start"}),Ht()}function vt(){return v.map(t=>({id:t.id,selected:!1,optionKey:t.options[0].key,quantity:1}))}function Pt(){return R.map(t=>({id:t.id,selected:!1}))}function te(t){return vt().map(e=>{const n=t==null?void 0:t.find(i=>i.id===e.id);if(!n)return e;const o=v.find(i=>i.id===e.id),a=o==null?void 0:o.options.some(i=>i.key===n.optionKey);return{...e,selected:!!n.selected,optionKey:a?n.optionKey:e.optionKey,quantity:St(n.quantity)}})}function ee(t){return Pt().map(e=>{const n=t==null?void 0:t.find(o=>o.id===e.id);return n?{...e,selected:!!n.selected}:e})}function $t(t){t&&_t({currentStep:t.currentStep??1,tentState:t.tentState,addonState:t.addonState,formDraft:t.formDraft??{}})}function G(t,e){if(!e.selected)return 0;const n=F(t,e.optionKey);return e.quantity*n.rate*t.pax}function x(t){return t.reduce((e,n)=>{const o=v.find(a=>a.id===n.id);return!o||!n.selected?e:e+o.pax*n.quantity},0)}function X(t){return t.reduce((e,n)=>{const o=v.find(a=>a.id===n.id);return e+(o?G(o,n):0)},0)}function z(t,e){if(!D(e))return 0;const n=x(e);return n===0?0:t.reduce((o,a)=>{if(!a.selected)return o;const i=R.find(r=>r.id===a.id);return o+(i?i.rate*n:0)},0)}function lt(t,e){return X(t)+z(e,t)}function tt(t,e){return Math.round(lt(t,e)*.5)}function xt(t,e){return tt(t,e)}function ne(t,e,n){const o=lt(t,e),a=tt(t,e),i=x(t),r=t.filter(c=>c.selected).map(c=>{const g=v.find(I=>I.id===c.id),k=F(g,c.optionKey);return{packageName:`${g.name} — ${k.label}`,quantity:c.quantity,ratePerPax:k.rate,totalNoOfPax:g.pax*c.quantity,totalPrice:G(g,c)}}),f=D(t)?e.filter(c=>c.selected).map(c=>{const g=R.find(k=>k.id===c.id);return{addOnName:Y(g),totalNoOfPax:i,ratePerPax:g.rate,totalPrice:g.rate*i}}):[];return{recipientEmail:Qt,...D(t)&&n.preferredDates?{preferred_date:n.preferredDates}:{},contactName:n.contactName,contactNo:n.contactPhone,ContactEmail:n.contactEmail,totalVegetarian:n.vegPax,totalAmount:o,bookingAmount:a,balance:o-a,transactionNo:n.transactionId,packages:r,addOns:f}}async function oe(t){const e=await fetch(jt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){let n="";try{const o=await e.json();n=(o==null?void 0:o.message)||(o==null?void 0:o.error)||""}catch{}throw new Error(n||`Request failed (${e.status})`)}return e.json().catch(()=>({}))}function ct(t,e){return Math.min(e,Math.max(0,Number(t)||0))}function ae(t,e){const n=ct(t,e),o=n<=0?"disabled":"",a=n>=e?"disabled":"";return`
    <div class="booking-qty-stepper booking-qty-stepper--veg">
      <button type="button" class="booking-qty-btn veg-pax-minus" aria-label="Decrease vegetarian pax" ${o}>−</button>
      <input type="number" id="veg-pax" name="vegPax" class="booking-qty veg-pax-input" min="0" max="${e}" value="${n}" required aria-label="Number of vegetarian pax" />
      <button type="button" class="booking-qty-btn veg-pax-plus" aria-label="Increase vegetarian pax" ${a}>+</button>
    </div>`}function Tt(t,e){const{labels:n}=N(e);return n.map((o,a)=>{const i=a+1,r=i<t;return`
    <button
      type="button"
      class="booking-step ${i===t?"is-active":""} ${i<t?"is-done is-clickable":""}"
      data-step-nav="${i}"
      ${r?"":"disabled"}
      aria-current="${i===t?"step":"false"}"
      aria-label="${o}${r?" — go back to edit":""}"
    >
      <span class="booking-step-num">${i}</span>
      <span class="booking-step-label">${o}</span>
    </button>`}).join("")}function ie(t){return`<p class="booking-pax-multiple">Multiple of ${t}</p>`}function re(t,e){const n=e.selected?"":"disabled",o=t.options.map(a=>`
        <label class="booking-duration-option">
          <input
            type="radio"
            class="tent-option"
            name="duration-${t.id}"
            data-tent-id="${t.id}"
            value="${a.key}"
            ${e.optionKey===a.key?"checked":""}
            ${n}
          />
          <span>${a.label}</span>
        </label>`).join("");return`
    <fieldset class="booking-duration-radios">
      <legend class="visually-hidden">Duration for ${t.name}</legend>
      ${o}
    </fieldset>`}function se(t,e,n){const o=F(t,e.optionKey),a=G(t,e),i=Zt[t.packageType]||"",f=!ht(t,n)&&!e.selected;return`
      <tr class="booking-row ${e.selected?"is-selected":""} ${f?"is-locked":""}" data-tent-id="${t.id}">
        <td class="booking-col-check" data-label="">
          <input type="checkbox" class="booking-check tent-check" data-tent-id="${t.id}" ${e.selected?"checked":""} ${f?"disabled":""} aria-label="Select ${t.name}" />
        </td>
        <td class="booking-col-tent" data-label="Package">
          <div class="booking-tent-cell">
            <img src="${t.image}" alt="${t.name}" loading="lazy" onerror="this.src='/tents/solo-dome.png'" />
            <div>
              <strong>${t.name}</strong>
              <span class="booking-type-badge ${i}">${t.packageType}</span>
            </div>
          </div>
        </td>
        <td class="booking-col-nights" data-label="Duration">
          ${re(t,e)}
        </td>
        <td class="booking-col-details" data-label="Details">
          ${t.description?`<p class="booking-inclusion-text">${t.description}</p>`:""}
          ${Array.isArray(t.inclusions)&&t.inclusions.length?`<ul class="booking-inclusions">${t.inclusions.map(c=>`<li>${c}</li>`).join("")}</ul>`:""}
          <span class="booking-pax-badge">${t.pax} pax capacity</span>
          <!-- ${ie(t.pax)} -->
        </td>
        <td class="booking-col-rate" data-label="Rate / pax">
          <span class="tent-rate-display">${u(o.rate)}</span>
          <small>per pax · ${o.label}</small>
        </td>
        <td class="booking-col-qty" data-label="Qty of Tents">
          ${Yt(t,e.quantity,e.selected)}
        </td>
        <td class="booking-col-total" data-label="Total">
          <strong class="tent-total-display">${u(a)}</strong>
        </td>
      </tr>`}function le(t){const e=bt(t);return e==="premium"?'<p class="booking-track-hint booking-track-hint--premium">Premium transfer selected — you may add other Premium packages only. Comfort and Luxury packages cannot be combined. Deselect all Premium packages to switch.</p>':e==="campsite"?'<p class="booking-track-hint booking-track-hint--campsite">Comfort &amp; Luxury selected — you may combine these packages. Premium transfer packages cannot be added to this order. Deselect all to switch to Premium.</p>':'<p class="booking-track-hint">Select either <strong>Comfort &amp; Luxury</strong> packages (Ziro campsite) or <strong>Premium</strong> transfer packages — not both in the same booking.</p>'}const ce={"Ziro Campsite":"campsite","Guwahati Central":"guwahati","Naharlagun Station":"naharlagun","Holongi Airport":"holongi"},de={"Guwahati Central":"/guwahati-expedition.html","Naharlagun Station":"/naharlagun-shuttle.html","Holongi Airport":"/holongi-fly-in.html"};function qt(t){let e="";Ut.forEach(a=>{const i=v.filter(g=>g.group===a);if(!i.length)return;const r=ce[a]||"default",f=de[a],c=f?`<a href="${f}" class="booking-group-link">Learn more</a>`:"";e+=`<tr class="booking-group-row booking-group-row--${r}"><td colspan="7"><div class="booking-group-header"><span class="booking-group-title">${a}</span>${c}</div></td></tr>`,i.forEach(g=>{const k=t.find(I=>I.id===g.id);e+=se(g,k,t)})});const n=X(t),o=x(t);return`
    <div class="booking-panel" data-panel="1">
      <p class="booking-panel-lead">Choose your packages, duration, and quantity. Total per row = quantity × rate × pax capacity.</p>
      ${le(t)}
      <div class="booking-table-wrap">
        <table class="booking-table booking-table--tents">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Package</th>
              <th scope="col">Duration</th>
              <th scope="col">Inclusions &amp; Capacity</th>
              <th scope="col">Rate / Pax</th>
              <th scope="col">Qty of Tents</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
          <tfoot>
            <tr>
              <td colspan="5"></td>
              <td class="booking-foot-label">Subtotal</td>
              <td><strong id="tents-subtotal">${u(n)}</strong></td>
            </tr>
            <tr>
              <td colspan="5"></td>
              <td class="booking-foot-label">Total Pax</td>
              <td><strong id="tents-total-pax">${o}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>`}function At(t,e){const n=x(e),o=z(t,e),a=R.map(i=>{const r=t.find(c=>c.id===i.id),f=r.selected?i.rate*n:0;return`
      <tr class="booking-row ${r.selected?"is-selected":""}" data-addon-id="${i.id}">
        <td class="booking-col-check" data-label="">
          <input type="checkbox" class="booking-check addon-check" data-addon-id="${i.id}" ${r.selected?"checked":""} aria-label="Select ${Y(i)}" />
        </td>
        <td class="booking-col-addon" data-label="Add-on">
          <strong>${Y(i)}</strong>
          <p>${i.description}</p>
        </td>
        <td class="booking-col-pax-readonly" data-label="Pax">
          <span class="booking-pax-readonly">${n}</span>
          <small>from packages</small>
        </td>
        <td class="booking-col-rate" data-label="Rate">
          ${u(i.rate)}<small>per pax</small>
        </td>
        <td class="booking-col-total" data-label="Total">
          <strong class="addon-total-display">${u(f)}</strong>
        </td>
      </tr>`}).join("");return`
    <div class="booking-panel" data-panel="2">
      <p class="booking-panel-lead">Select one or more optional daytime experiences for Comfort &amp; Luxury packages (${n} pax).</p>
      <div class="booking-table-wrap">
        <table class="booking-table booking-table--addons">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Add-on</th>
              <th scope="col">Pax</th>
              <th scope="col">Rate</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>${a}</tbody>
          <tfoot>
            <tr>
              <td colspan="3"></td>
              <td class="booking-foot-label">Subtotal</td>
              <td><strong id="addons-subtotal">${u(o)}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>`}function Nt(t,e,n={}){const o=x(t),a=X(t),i=D(t),r=z(e,t),f=a+r,c=Math.round(f*.5),g=c,k=_(n.contactName??""),I=_(n.contactPhone??""),M=_(n.contactEmail??""),w=_(n.transactionId??""),l=n.preferredDates||"24th, 25th and 26th",d=i?`
          <fieldset class="form-field booking-preferred-dates">
            <legend>Preferred Dates</legend>
            <div class="booking-preferred-dates-options">
              <label class="booking-preferred-date-option">
                <input type="radio" name="preferredDates" value="24th, 25th and 26th" ${l==="24th, 25th and 26th"?"checked":""} required />
                <span>24th, 25th and 26th</span>
              </label>
              <label class="booking-preferred-date-option">
                <input type="radio" name="preferredDates" value="25th, 26th and 27th" ${l==="25th, 26th and 27th"?"checked":""} />
                <span>25th, 26th and 27th</span>
              </label>
            </div>
          </fieldset>`:"",s=ct(n.vegPax??0,o),p=t.filter(m=>m.selected).map(m=>{const h=v.find(q=>q.id===m.id),$=F(h,m.optionKey);return`<li>${m.quantity}× ${h.name} · ${$.label} · ${u(G(h,m))}</li>`}).join("")||"<li>No packages selected</li>";let b;return i?b=`
          <div class="summary-block">
            <h4>Daytime Add-ons</h4>
            <ul>${e.filter(h=>h.selected).map(h=>{const $=R.find(q=>q.id===h.id);return`<li>${Y($)} · ${o} pax · ${u($.rate*o)}</li>`}).join("")||"<li>No add-ons selected</li>"}</ul>
            <p class="summary-line-total">${u(r)}</p>
          </div>`:b=`
          <div class="summary-block">
            <h4>Daytime Add-ons</h4>
            <ul><li>Included with Premium package</li></ul>
            <p class="summary-line-total summary-line-total--included">Included</p>
          </div>`,`
    <div class="booking-panel" data-panel="3">
      <div class="booking-summary-grid">
        <div class="booking-summary-order">
          <h3>Order Summary</h3>
          <div class="summary-block">
            <h4>Packages</h4>
            <ul>${p}</ul>
            <p class="summary-line-total">${u(a)}</p>
          </div>
          ${b}
          <div class="summary-block summary-block--fees">
            <div class="summary-fee-row">
              <span>Order Subtotal</span>
              <strong id="order-subtotal">${u(f)}</strong>
            </div>
            <div class="summary-fee-row">
              <span>Booking Fee (50%)</span>
              <strong id="booking-fee">${u(c)}</strong>
            </div>
          </div>
          <div class="summary-grand">
            <span>Amount to Pay (${o} pax)</span>
            <strong id="grand-total">${u(g)}</strong>
          </div>
        </div>

        <form class="booking-form" id="booking-form" novalidate>
          <h3>Complete Your Booking</h3>
          ${d}
          <div class="form-field">
            <label for="contact-name">Primary Contact Person</label>
            <input type="text" id="contact-name" name="contactName" required autocomplete="name" placeholder="Full name" value="${k}" />
          </div>
          <div class="form-field">
            <label for="contact-phone">Contact Number</label>
            <input type="tel" id="contact-phone" name="contactPhone" required autocomplete="tel" placeholder="+91 98765 43210" value="${I}" />
          </div>
          <div class="form-field">
            <label for="contact-email">Email</label>
            <input type="email" id="contact-email" name="contactEmail" required autocomplete="email" placeholder="you@example.com" value="${M}" />
          </div>
          <div class="form-field form-field--payment">
            <label>Scan to Pay</label>
            <div class="payment-qr">
              <img src="${Vt}" alt="Ezar Endeavors UPI QR code for payment" width="220" height="220" />
              <p>Pay <strong id="payment-amount">${u(g)}</strong> via UPI, then enter your transaction ID below.</p>
            </div>
          </div>
          <div class="form-field">
            <label for="transaction-id">Transaction ID</label>
            <input type="text" id="transaction-id" name="transactionId" required placeholder="UPI / bank reference number" value="${w}" />
          </div>
          <div class="form-field">
            <label for="veg-pax">Number of Vegetarian Pax</label>
            ${ae(s,o)}
            <small>Out of ${o} total travellers</small>
          </div>
          <button type="submit" class="btn btn-primary btn-block" id="booking-submit-btn">Submit Booking</button>
          <p class="booking-form-note" id="booking-success" hidden>Thank you! Your booking request has been received. We will confirm within 24 hours.</p>
        </form>
      </div>
    </div>`}function ue(t){const{currentStep:e,tentState:n,addonState:o,formDraft:a}=t;x(n);const i=xt(n,o),{totalSteps:r}=N(n);return`
    <nav class="booking-steps booking-steps--${r}" aria-label="Booking progress">${Tt(e,n)}</nav>
    <div class="booking-panels">
      ${qt(n)}
      ${At(o,n)}
      ${Nt(n,o,a)}
    </div>
    <div class="booking-actions">
      <button type="button" class="btn btn-outline" id="booking-prev" ${e===1?"disabled":""}>← Back to Edit</button>
      <div class="booking-running-total">
        <span>Booking fee (50%)</span>
        <strong id="running-total">${u(i)}</strong>
      </div>
      <button type="button" class="btn btn-primary" id="booking-next">${e===r?"Review":"Continue"}</button>
    </div>
    <p class="booking-error" id="booking-error" role="alert" hidden></p>`}function O(t,e,n){const o=yt(e,n);t.querySelectorAll(".booking-panel").forEach(c=>{c.hidden=Number(c.dataset.panel)!==o});const{totalSteps:a}=N(n),i=t.querySelector("#booking-prev"),r=t.querySelector("#booking-next");i&&(i.disabled=e===1),r&&(r.textContent=e===a?"Review":e===a-1?"Continue to Summary":"Continue");const f=t.querySelector(".booking-steps");f&&(f.className=`booking-steps booking-steps--${a}`)}function it(t,e,n){const o=t.querySelector(".booking-steps");o&&(o.innerHTML=Tt(e,n),o.className=`booking-steps booking-steps--${N(n).totalSteps}`)}function gt(t,e){const n=t.querySelector('[data-panel="1"]');if(!n)return;const o=document.createElement("div");o.innerHTML=qt(e.tentState),n.replaceWith(o.firstElementChild),O(t,e.currentStep,e.tentState)}function pe(t,e){const n=lt(e.tentState,e.addonState),o=tt(e.tentState,e.addonState),a=t.querySelector("#order-subtotal"),i=t.querySelector("#booking-fee"),r=t.querySelector("#grand-total"),f=t.querySelector("#payment-amount");a&&(a.textContent=u(n)),i&&(i.textContent=u(o)),r&&(r.textContent=u(o)),f&&(f.textContent=u(o))}function Z(t,e){const n=t.querySelector("#running-total");n&&(n.textContent=u(xt(e.tentState,e.addonState))),pe(t,e),Ct(e),wt()}let P=null;function me(){const t=document.getElementById("booking-sticky-checkout");P==null||P.disconnect(),P=null,t&&(t.hidden=!0,t.classList.add("is-hidden")),document.body.classList.remove("has-booking-sticky-checkout")}function Ct(t){const e=document.getElementById("booking-sticky-checkout");if(!e||document.body.classList.contains("booking-confirmed"))return;const n=x(t.tentState),o=tt(t.tentState,t.addonState),a=e.querySelector("#sticky-total-pax"),i=e.querySelector("#sticky-booking-amount");if(a&&(a.textContent=n),i&&(i.textContent=u(o)),n<=0){e.hidden=!0,e.classList.add("is-hidden"),document.body.classList.remove("has-booking-sticky-checkout"),P==null||P.disconnect(),P=null;return}e.hidden=!1}function wt(){const t=document.getElementById("booking-sticky-checkout"),e=document.getElementById("booking-submit-btn");if(P==null||P.disconnect(),P=null,!(!t||t.hidden||document.body.classList.contains("booking-confirmed"))){if(!e){t.classList.remove("is-hidden"),document.body.classList.add("has-booking-sticky-checkout");return}P=new IntersectionObserver(([n])=>{const o=n.isIntersecting;t.classList.toggle("is-hidden",o),document.body.classList.toggle("has-booking-sticky-checkout",!o&&!t.hidden)},{threshold:.35,rootMargin:"0px 0px -1px 0px"}),P.observe(e)}}function ot(){var t;(t=document.getElementById("booking-submit-btn"))==null||t.scrollIntoView({behavior:"smooth",block:"center"})}function ge(t,e,n){const o=N(e.tentState);if(L(e.currentStep,e.tentState)){ot();return}if(e.currentStep===1){const a=Lt(e,1);if(a){const i=t.querySelector("#booking-error");i&&(i.textContent=a,i.hidden=!1,i.classList.remove("booking-notice"));return}if(o.showAddons){n(2);return}n(o.totalSteps),window.setTimeout(ot,400);return}st(e.currentStep,e.tentState)&&(n(o.totalSteps),window.setTimeout(ot,400))}function fe(t,e,n){const o=document.getElementById("sticky-checkout-btn");!o||o.dataset.bound==="true"||(o.dataset.bound="true",o.addEventListener("click",()=>{ge(t,e,n)}),Ct(e),wt())}function Et(t,e,n){const o=t.querySelector(`tr[data-tent-id="${e.id}"]`);if(!o)return;const a=F(e,n.optionKey);o.classList.toggle("is-selected",n.selected),o.querySelector(".tent-rate-display").textContent=u(a.rate),o.querySelector(".tent-rate-display + small").textContent=`per pax · ${a.label}`,o.querySelector(".tent-total-display").textContent=u(G(e,n)),o.querySelectorAll(".tent-option").forEach(c=>{c.disabled=!n.selected,c.checked=n.selected&&c.value===n.optionKey});const i=o.querySelector(".tent-qty"),r=o.querySelector(".tent-qty-minus"),f=o.querySelector(".tent-qty-plus");i&&(i.value=n.quantity,i.disabled=!n.selected),r&&(r.disabled=!n.selected||n.quantity<=H),f&&(f.disabled=!n.selected||n.quantity>=J)}function at(t,e,n,o){const a=e.tentState.find(r=>r.id===n),i=v.find(r=>r.id===n);!a||!i||!a.selected||(a.quantity=St(o),Et(t,i,a),Dt(t,e),Bt(t,e))}function Dt(t,e){const n=t.querySelector("#tents-subtotal"),o=t.querySelector("#tents-total-pax");n&&(n.textContent=u(X(e.tentState))),o&&(o.textContent=x(e.tentState))}function be(t,e,n,o){const a=t.querySelector(`tr[data-addon-id="${e.id}"]`);if(!a)return!1;const i=n.selected?e.rate*o:0;a.classList.toggle("is-selected",n.selected),a.querySelector(".addon-check").checked=n.selected,a.querySelector(".addon-total-display").textContent=u(i);const r=a.querySelector(".booking-pax-readonly");return r&&(r.textContent=o),!0}function he(t,e){x(e.tentState);const n=t.querySelector("#addons-subtotal");n&&(n.textContent=u(z(e.addonState,e.tentState)))}function rt(t,e){const n=t.querySelector('[data-panel="2"]');if(!n)return;const o=document.createElement("div");o.innerHTML=At(e.addonState,e.tentState),n.replaceWith(o.firstElementChild),O(t,e.currentStep,e.tentState)}function B(t,e){const n=t.querySelector('[data-panel="3"]');if(!n)return;It(t,e);const o=document.createElement("div");o.innerHTML=Nt(e.tentState,e.addonState,e.formDraft),n.replaceWith(o.firstElementChild),O(t,e.currentStep,e.tentState)}function It(t,e){var o;const n=t.querySelector("#booking-form");n&&(e.formDraft={...D(e.tentState)?{preferredDates:((o=n.preferredDates)==null?void 0:o.value)??""}:{},contactName:n.contactName.value,contactPhone:n.contactPhone.value,contactEmail:n.contactEmail.value,transactionId:n.transactionId.value,vegPax:n.vegPax.value})}function Lt(t,e){if(e===1){const n=x(t.tentState);if(!t.tentState.some(a=>a.selected&&a.quantity>0))return"Select at least one package to continue.";if(n===0)return"Total pax must be greater than zero.";if(Wt(t.tentState))return"Premium packages cannot be combined with Comfort or Luxury packages in the same booking."}return null}function ke(t,e){const n=t.tentState.find(a=>a.id===e),o=v.find(a=>a.id===e);n&&o&&(kt(t.tentState,o),n.selected=!0)}function ft(t,e){const n=t.querySelector("#booking-error");n&&(n.textContent=e,n.hidden=!1,n.classList.add("booking-notice"))}function Bt(t,e){const n=N(e.tentState);it(t,e.currentStep,e.tentState),e.currentStep>n.totalSteps?(e.currentStep=n.totalSteps,it(t,e.currentStep,e.tentState),B(t,e),bindFormSubmit(t,e)):e.currentStep===2&&!n.showAddons?(B(t,e),bindFormSubmit(t,e)):st(e.currentStep,e.tentState)?rt(t,e):L(e.currentStep,e.tentState)&&(B(t,e),bindFormSubmit(t,e)),O(t,e.currentStep,e.tentState),Z(t,e),$t(e)}function ye(){const t=document.getElementById("booking-wizard");if(!t)return;const e=Rt(),n={currentStep:(e==null?void 0:e.currentStep)??1,tentState:e!=null&&e.tentState?te(e.tentState):vt(),addonState:e!=null&&e.addonState?ee(e.addonState):Pt(),formDraft:(e==null?void 0:e.formDraft)??{}};function o(){$t(n)}const a=new URLSearchParams(window.location.search).get("tent");a&&ke(n,{"double-dome":"classic-dome-double","alpine-twin":"premium-alpine-twin","alpine-three":"premium-alpine-triple"}[a]||a);const r=N(n.tentState);n.currentStep>r.totalSteps&&(n.currentStep=r.totalSteps),n.currentStep<1&&(n.currentStep=1),o();let f=!1;function c(l){var p;L(n.currentStep,n.tentState)&&l<n.currentStep&&It(t,n),n.currentStep=l,it(t,l,n.tentState),l===1?gt(t,n):st(l,n.tentState)?rt(t,n):L(l,n.tentState)&&(B(t,n),M(t,n)),O(t,l,n.tentState),w(),Z(t,n),o();const d=t.querySelector("#booking-error");d&&(d.hidden=!0);const s=yt(l,n.tentState);(p=t.querySelector(`[data-panel="${s}"]`))==null||p.scrollIntoView({behavior:"smooth",block:"nearest"})}function g(){t.innerHTML=ue(n),O(t,n.currentStep,n.tentState),w(),k(),M(t,n),fe(t,n,c)}function k(){f||(f=!0,t.addEventListener("click",l=>{var m;const d=l.target.closest("[data-step-nav]");if(d&&!d.disabled){const h=Number(d.dataset.stepNav);h<n.currentStep&&c(h);return}if(l.target.closest("#booking-prev")){n.currentStep>1&&c(n.currentStep-1);return}if(!l.target.closest("#booking-next"))return;const s=Lt(n,n.currentStep),p=t.querySelector("#booking-error");if(s){p.textContent=s,p.hidden=!1,p.classList.remove("booking-notice");return}p.hidden=!0,p.classList.remove("booking-notice");const{totalSteps:b}=N(n.tentState);n.currentStep<b?c(n.currentStep+1):(m=document.getElementById("booking-form"))==null||m.scrollIntoView({behavior:"smooth",block:"start"})}))}function I(l,d){const s=l.querySelector(".veg-pax-input"),p=l.querySelector(".veg-pax-minus"),b=l.querySelector(".veg-pax-plus");if(!s)return;const m=x(d.tentState);function h($){const q=ct($,m);s.value=q,p&&(p.disabled=q<=0),b&&(b.disabled=q>=m),d.formDraft.vegPax=String(q),o()}p==null||p.addEventListener("click",$=>{$.preventDefault(),h(Number(s.value)-1)}),b==null||b.addEventListener("click",$=>{$.preventDefault(),h(Number(s.value)+1)}),s.oninput=()=>h(s.value)}function M(l,d){const s=l.querySelector("#booking-form");s&&(I(l,d),s.onsubmit=async p=>{var pt;p.preventDefault();const b=x(d.tentState),m=D(d.tentState),h=m?((pt=s.preferredDates)==null?void 0:pt.value)??"":"",$=s.contactName.value.trim(),q=s.contactPhone.value.trim(),et=s.contactEmail.value.trim(),dt=s.transactionId.value.trim(),nt=Number(s.vegPax.value),A=l.querySelector("#booking-error"),U=s.querySelector('button[type="submit"]'),Ot=s.querySelector("#booking-success");if(m&&!h){A.textContent="Please select your preferred dates.",A.hidden=!1;return}if(!$||!q||!et||!dt){A.textContent="Please fill in all required fields.",A.hidden=!1;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(et)){A.textContent="Please enter a valid email address.",A.hidden=!1;return}if(nt<0||nt>b){A.textContent=`Vegetarian pax must be between 0 and ${b}.`,A.hidden=!1;return}const ut=ne(d.tentState,d.addonState,{preferredDates:h,contactName:$,contactPhone:q,contactEmail:et,transactionId:dt,vegPax:nt});A.hidden=!0,Ot.hidden=!0,U.disabled=!0,U.textContent="Submitting...";try{const E=await oe(ut);zt(l,ut,{totalPax:b,premiumAddonsIncluded:!D(d.tentState),bookingRef:(E==null?void 0:E.bookingId)||(E==null?void 0:E.id)||""})}catch(E){A.textContent=E.message||"Something went wrong submitting your booking. Please try again or contact us on WhatsApp.",A.hidden=!1,U.disabled=!1,U.textContent="Submit Booking"}})}function w(){t.querySelectorAll(".tent-check").forEach(l=>{l.onchange=d=>{const s=d.target.dataset.tentId,p=n.tentState.find(h=>h.id===s),b=v.find(h=>h.id===s),m=t.querySelector("#booking-error");if(m&&m.classList.remove("booking-notice"),d.target.checked){if(!ht(b,n.tentState)){d.target.checked=!1,ft(t,b.isPremium?"Premium packages cannot be combined with Comfort or Luxury. Deselect campsite packages first.":"Comfort and Luxury packages cannot be combined with Premium. Deselect Premium packages first.");return}const h=kt(n.tentState,b);p.selected=!0,h>0?ft(t,b.isPremium?"Switched to Premium — previous Comfort/Luxury selections were removed.":"Switched to Comfort/Luxury — previous Premium selections were removed."):m&&(m.hidden=!0)}else p.selected=!1,m&&m.classList.contains("booking-notice")&&(m.hidden=!0,m.classList.remove("booking-notice"));gt(t,n),Bt(t,n),w()}}),t.querySelectorAll(".tent-option").forEach(l=>{l.onchange=d=>{const s=d.target.dataset.tentId,p=n.tentState.find(m=>m.id===s),b=v.find(m=>m.id===s);p.optionKey=d.target.value,Et(t,b,p),Dt(t,n),Z(t,n),L(n.currentStep,n.tentState)&&B(t,n),o(),w()}}),t.querySelectorAll(".tent-qty").forEach(l=>{l.oninput=d=>{at(t,n,d.target.dataset.tentId,d.target.value),w()}}),t.querySelectorAll(".tent-qty-minus").forEach(l=>{l.onclick=d=>{d.preventDefault();const s=l.dataset.tentId,p=n.tentState.find(b=>b.id===s);at(t,n,s,p.quantity-1),w()}}),t.querySelectorAll(".tent-qty-plus").forEach(l=>{l.onclick=d=>{d.preventDefault();const s=l.dataset.tentId,p=n.tentState.find(b=>b.id===s);at(t,n,s,p.quantity+1),w()}}),t.querySelectorAll(".addon-check").forEach(l=>{l.onchange=d=>{const s=d.target.dataset.addonId,p=n.addonState.find(h=>h.id===s),b=R.find(h=>h.id===s),m=x(n.tentState);p.selected=d.target.checked,be(t,b,p,m)?he(t,n):rt(t,n),Z(t,n),L(n.currentStep,n.tentState)&&B(t,n),o()}}),t.querySelectorAll("tr[data-addon-id]").forEach(l=>{l.onclick=d=>{if(d.target.closest(".addon-check"))return;const s=l.querySelector(".addon-check");s&&(s.checked=!s.checked,s.dispatchEvent(new Event("change",{bubbles:!0})))}})}g()}Ft();ye();
