import{l as Ot,s as Rt,c as _t,i as Ht}from"./core-BQg2YDUh.js";const W="The Full Overland Transfer: Ditch the transit stress entirely. Join the main group from our central Guwahati lounge for an epic, ice-breaking overnight road trip straight into the mountains.",K="The ultimate budget-smart hack. We pick you up right from the Naharlagun railway station in a shared Tata Sumo (comfortably seating a crew of 9–10 cool travellers) for a scenic 3-hour journey up the ridges.",V="The ultimate time-saver shortcut. If you manage to snare a seat on the limited direct flights servicing Donyi Polo Airport (Holongi), you'll completely bypass the gruelling 9-hour overland haul. We'll pick you up right from the arrival terminal for a crisp, scenic 4-hour mountain drive (roughly 100 km) straight up into the valley.",j={key:"3n4d",label:"3 Night 4 Days",rate:0},T={key:"4n5d",label:"4 Night 5 Days",rate:0},Q={key:"5n6d",label:"5 Night 6 Days",rate:0},y={soloDome:"/tents/solo-dome.png",doubleDome:"/tents/double-dome.png",twinAlpine:"/tents/twin-alpine.png",tripleAlpine:"/tents/triple-alpine.png"},Ft=["Breakfast & Dinner Included","Insulated camping foam mat, pillow & blanket","24×7 On-site Assistance"],Gt=["Breakfast & Dinner Included","Insulated camping foam mat, pillows & blankets","24×7 On-site Assistance"],pt=["Breakfast & Dinner Included","Thick mattress, premium linens, pillows & blankets","24×7 On-site Assistance"];function S(t,e,n,o,a,i,r,b,c,f=!1){return{id:t,name:e,group:n,packageType:o,image:a,pax:i,description:r,inclusions:b,options:c,isPremium:f}}const Mt=["Ziro Campsite","Guwahati Central","Naharlagun Station","Holongi Airport"],v=[S("solo-dome","Solo Dome Tent","Ziro Campsite","Comfort",y.soloDome,1,"Perfect for solo festival-goers seeking their own private space after a day of music and adventure. A simple, comfortable setup designed for a restful night’s sleep.",Ft,[{...j,rate:7500},{...T,rate:9e3}]),S("classic-dome-double","Classic Dome Tent – Double Sharing","Ziro Campsite","Comfort",y.doubleDome,2,"An affordable and comfortable stay for two. Spacious, weatherproof dome tents with everything you need for a relaxed festival experience.",Gt,[{...j,rate:6e3},{...T,rate:8e3}]),S("premium-alpine-twin","Premium Alpine Tent – Twin Sharing","Ziro Campsite","Luxury",y.twinAlpine,2,"Designed for guests who prefer extra comfort, space and upgraded bedding. Enjoy a premium camping experience without giving up the charm of the outdoors.",pt,[{...j,rate:7500},{...T,rate:1e4}]),S("premium-alpine-triple","Premium Alpine Tent – Triple Sharing","Ziro Campsite","Luxury",y.tripleAlpine,3,"The perfect choice for groups of three looking for a spacious, premium stay. Comfortable bedding and generous interiors make it ideal for friends travelling together.",pt,[{...j,rate:6750},{...T,rate:9e3}]),S("guwahati-solo-dome","Guwahati Central Solo Dome Tent","Guwahati Central","Premium",y.soloDome,1,W,[],[{...Q,rate:23e3}],!0),S("guwahati-double-dome","Guwahati Central Double Sharing Dome Tent","Guwahati Central","Premium",y.doubleDome,2,W,[],[{...Q,rate:23e3}],!0),S("guwahati-alpine-twin","Guwahati Central Alpine Tent Twin Sharing","Guwahati Central","Premium",y.twinAlpine,2,W,[],[{...Q,rate:25e3}],!0),S("guwahati-alpine-triple","Guwahati Central Alpine Tent Triple Sharing","Guwahati Central","Premium",y.tripleAlpine,3,W,[],[{...Q,rate:25e3}],!0),S("naharlagun-solo-dome","Naharlagun Station Solo Dome Tent","Naharlagun Station","Premium",y.soloDome,1,K,[],[{...T,rate:13600}],!0),S("naharlagun-double-dome","Naharlagun Station Double Sharing Dome Tent","Naharlagun Station","Premium",y.doubleDome,2,K,[],[{...T,rate:13600}],!0),S("naharlagun-alpine-twin","Naharlagun Station Alpine Tent Twin Sharing","Naharlagun Station","Premium",y.twinAlpine,2,K,[],[{...T,rate:15500}],!0),S("naharlagun-alpine-triple","Naharlagun Station Alpine Tent Triple Sharing","Naharlagun Station","Premium",y.tripleAlpine,3,K,[],[{...T,rate:15500}],!0),S("holongi-solo-dome","Holongi Airport Solo Dome Tent","Holongi Airport","Premium",y.soloDome,1,V,[],[{...T,rate:13600}],!0),S("holongi-double-dome","Holongi Airport Double Sharing Dome Tent","Holongi Airport","Premium",y.doubleDome,2,V,[],[{...T,rate:13600}],!0),S("holongi-alpine-twin","Holongi Airport Alpine Tent Twin Sharing","Holongi Airport","Premium",y.twinAlpine,2,V,[],[{...T,rate:15500}],!0),S("holongi-alpine-triple","Holongi Airport Alpine Tent Triple Sharing","Holongi Airport","Premium",y.tripleAlpine,3,V,[],[{...T,rate:15500}],!0)];function H(t,e){return t.options.find(n=>n.key===e)||t.options[0]}function ft(t){for(const e of t){if(!e.selected)continue;const n=v.find(o=>o.id===e.id);if(n)return n.isPremium?"premium":"campsite"}return null}function bt(t,e){const n=e.find(a=>a.id===t.id);if(n!=null&&n.selected)return!0;const o=ft(e);return o?o==="premium"?t.isPremium:!t.isPremium:!0}function ht(t,e){let n=0;return t.forEach(o=>{if(o.id===e.id)return;const a=v.find(r=>r.id===o.id);if(!a||!o.selected)return;(e.isPremium&&!a.isPremium||!e.isPremium&&a.isPremium)&&(o.selected=!1,n+=1)}),n}function Ut(t){const e=new Set;return t.forEach(n=>{if(!n.selected)return;const o=v.find(a=>a.id===n.id);o&&e.add(o.isPremium?"premium":"campsite")}),e.size>1}function Wt(t){return t.some(e=>e.selected&&e.quantity>0)}function F(t){return Wt(t)?t.some(e=>{if(!e.selected)return!1;const n=v.find(o=>o.id===e.id);return n&&!n.isPremium}):!0}function A(t){const e=F(t);return{labels:e?["Select Packages","Daytime Add-ons","Summary & Pay"]:["Select Packages","Summary & Pay"],totalSteps:e?3:2,showAddons:e}}function kt(t,e){const{showAddons:n}=A(e);return n?t:t===1?1:3}function I(t,e){return t===A(e).totalSteps}function rt(t,e){const{showAddons:n}=A(e);return n&&t===2}const O=[{id:"shivalinga",title:"Sidheshwar Nath Temple & Seeh Lake",dateLabel:"Sept 25",description:"Journey deep into dense, forested Kardo Hills to stand in awe before the world's highest naturally formed Shiva Linga—a sacred and powerful spiritual site hidden within the mountain mist. Follow this divine experience with a scenic visit to the tranquil, pine-ringed waters of Seeh Lake.",rate:500},{id:"fishing",title:"Traditional Paddy Field Fishing",dateLabel:"Sept 26",description:"Wade into the terraced fields and learn the traditional Apatani art of catching fish with your bare hands.",rate:1e3},{id:"heritage-walk",title:"Guided Indigenous Village Walk & Winery Trail",dateLabel:"Sept 27",description:"Take a guided heritage walk through villages like Hong and Hari to witness the Apatani's sustainable agriculture, signature bamboo architecture, and unique traditional facial tattoos across a stunning landscape currently featured on the UNESCO World Heritage list. Wrap up the trail with a visit to the Shark Tank India famous family-run Naara Aaba Winery—India's first commercial kiwi winery—for an exclusive tasting of locally sourced fruit and berry wines. A must-visit for culture seekers and wine enthusiasts alike!",rate:1500}];function Y(t){return t.dateLabel?`${t.title} (${t.dateLabel})`:t.title}const Kt="/images/payment/ezar-endeavors-qr.png",Vt="https://ziro-backend-3qdz.onrender.com/api/booking",jt="wildnestadventures@gmail.com",Qt={Comfort:"booking-type--comfort",Luxury:"booking-type--luxury",Premium:"booking-type--premium"};function u(t){return`₹${t.toLocaleString("en-IN")}`}const _=1,J=20;function yt(t){return Math.min(J,Math.max(_,Number(t)||_))}function Zt(t,e,n){const o=n?"":"disabled",a=!n||e<=_?"disabled":"",i=!n||e>=J?"disabled":"";return`
    <div class="booking-qty-stepper">
      <button type="button" class="booking-qty-btn tent-qty-minus" data-tent-id="${t.id}" aria-label="Decrease quantity for ${t.name}" ${a}>−</button>
      <input type="number" class="booking-qty tent-qty" data-tent-id="${t.id}" min="${_}" max="${J}" value="${e}" ${o} aria-label="Quantity for ${t.name}" />
      <button type="button" class="booking-qty-btn tent-qty-plus" data-tent-id="${t.id}" aria-label="Increase quantity for ${t.name}" ${i}>+</button>
    </div>`}function R(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function N(t){return R(t)}function Yt(t=new Date){return t.toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})}function Jt(t,e={}){const{totalPax:n=t.packages.reduce((f,k)=>f+k.totalNoOfPax,0),premiumAddonsIncluded:o=!1,submittedAt:a=Yt(),bookingRef:i=""}=e,r=i?`<p class="booking-confirmation-meta">Booking reference: ${N(i)}</p>`:"",b=t.packages.map(f=>`
        <tr>
          <td>${N(f.packageName)}</td>
          <td>${f.quantity}</td>
          <td>${u(f.ratePerPax)}</td>
          <td>${f.totalNoOfPax}</td>
          <td>${u(f.totalPrice)}</td>
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
            <td>${N(k.addOnName)}</td>
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
        <p>Thank you, <strong>${N(t.contactName)}</strong>. We have received your booking request and will confirm within 24 hours.</p>
        <p class="booking-confirmation-meta">Submitted on ${N(a)}</p>
        ${r}
      </header>

      <div class="booking-confirmation-sheet">
        <section class="booking-confirmation-section">
          <h3>Contact Details</h3>
          <dl class="booking-confirmation-details">
            <div><dt>Preferred Dates</dt><dd>${N(t.preferred_date||"—")}</dd></div>
            <div><dt>Primary Contact</dt><dd>${N(t.contactName)}</dd></div>
            <div><dt>Contact Number</dt><dd>${N(t.contactNo)}</dd></div>
            <div><dt>Email</dt><dd>${N(t.ContactEmail)}</dd></div>
            <div><dt>Transaction ID</dt><dd>${N(t.transactionNo)}</dd></div>
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
              <tbody>${b}</tbody>
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
    </article>`}function Xt(t,e,n={}){var i,r;document.body.classList.add("booking-confirmed"),pe();const o=document.querySelector(".page-hero--booking h1"),a=document.querySelector(".page-hero--booking p");o&&(o.textContent="Booking Confirmed"),a&&(a.textContent="Your reservation summary is below. Save or print this page for your records."),t.innerHTML=Jt(e,n),(i=t.querySelector("#booking-print-btn"))==null||i.addEventListener("click",()=>{window.print()}),(r=document.getElementById("booking-confirmation"))==null||r.scrollIntoView({behavior:"smooth",block:"start"}),_t()}function St(){return v.map(t=>({id:t.id,selected:!1,optionKey:t.options[0].key,quantity:1}))}function vt(){return O.map(t=>({id:t.id,selected:!1}))}function zt(t){return St().map(e=>{const n=t==null?void 0:t.find(i=>i.id===e.id);if(!n)return e;const o=v.find(i=>i.id===e.id),a=o==null?void 0:o.options.some(i=>i.key===n.optionKey);return{...e,selected:!!n.selected,optionKey:a?n.optionKey:e.optionKey,quantity:yt(n.quantity)}})}function te(t){return vt().map(e=>{const n=t==null?void 0:t.find(o=>o.id===e.id);return n?{...e,selected:!!n.selected}:e})}function Pt(t){t&&Rt({currentStep:t.currentStep??1,tentState:t.tentState,addonState:t.addonState,formDraft:t.formDraft??{}})}function G(t,e){if(!e.selected)return 0;const n=H(t,e.optionKey);return e.quantity*n.rate*t.pax}function $(t){return t.reduce((e,n)=>{const o=v.find(a=>a.id===n.id);return!o||!n.selected?e:e+o.pax*n.quantity},0)}function X(t){return t.reduce((e,n)=>{const o=v.find(a=>a.id===n.id);return e+(o?G(o,n):0)},0)}function z(t,e){if(!F(e))return 0;const n=$(e);return n===0?0:t.reduce((o,a)=>{if(!a.selected)return o;const i=O.find(r=>r.id===a.id);return o+(i?i.rate*n:0)},0)}function st(t,e){return X(t)+z(e,t)}function tt(t,e){return Math.round(st(t,e)*.5)}function $t(t,e){return tt(t,e)}function ee(t,e,n){const o=st(t,e),a=tt(t,e),i=$(t),r=t.filter(c=>c.selected).map(c=>{const f=v.find(D=>D.id===c.id),k=H(f,c.optionKey);return{packageName:`${f.name} — ${k.label}`,quantity:c.quantity,ratePerPax:k.rate,totalNoOfPax:f.pax*c.quantity,totalPrice:G(f,c)}}),b=F(t)?e.filter(c=>c.selected).map(c=>{const f=O.find(k=>k.id===c.id);return{addOnName:Y(f),totalNoOfPax:i,ratePerPax:f.rate,totalPrice:f.rate*i}}):[];return{recipientEmail:jt,preferred_date:n.preferredDates,contactName:n.contactName,contactNo:n.contactPhone,ContactEmail:n.contactEmail,totalVegetarian:n.vegPax,totalAmount:o,bookingAmount:a,balance:o-a,transactionNo:n.transactionId,packages:r,addOns:b}}async function ne(t){const e=await fetch(Vt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){let n="";try{const o=await e.json();n=(o==null?void 0:o.message)||(o==null?void 0:o.error)||""}catch{}throw new Error(n||`Request failed (${e.status})`)}return e.json().catch(()=>({}))}function lt(t,e){return Math.min(e,Math.max(0,Number(t)||0))}function oe(t,e){const n=lt(t,e),o=n<=0?"disabled":"",a=n>=e?"disabled":"";return`
    <div class="booking-qty-stepper booking-qty-stepper--veg">
      <button type="button" class="booking-qty-btn veg-pax-minus" aria-label="Decrease vegetarian pax" ${o}>−</button>
      <input type="number" id="veg-pax" name="vegPax" class="booking-qty veg-pax-input" min="0" max="${e}" value="${n}" required aria-label="Number of vegetarian pax" />
      <button type="button" class="booking-qty-btn veg-pax-plus" aria-label="Increase vegetarian pax" ${a}>+</button>
    </div>`}function xt(t,e){const{labels:n}=A(e);return n.map((o,a)=>{const i=a+1,r=i<t;return`
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
    </button>`}).join("")}function ae(t){return`<p class="booking-pax-multiple">Multiple of ${t}</p>`}function ie(t,e){const n=e.selected?"":"disabled",o=t.options.map(a=>`
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
    </fieldset>`}function re(t,e,n){const o=H(t,e.optionKey),a=G(t,e),i=Qt[t.packageType]||"",b=!bt(t,n)&&!e.selected;return`
      <tr class="booking-row ${e.selected?"is-selected":""} ${b?"is-locked":""}" data-tent-id="${t.id}">
        <td class="booking-col-check" data-label="">
          <input type="checkbox" class="booking-check tent-check" data-tent-id="${t.id}" ${e.selected?"checked":""} ${b?"disabled":""} aria-label="Select ${t.name}" />
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
          ${ie(t,e)}
        </td>
        <td class="booking-col-details" data-label="Details">
          ${t.description?`<p class="booking-inclusion-text">${t.description}</p>`:""}
          ${Array.isArray(t.inclusions)&&t.inclusions.length?`<ul class="booking-inclusions">${t.inclusions.map(c=>`<li>${c}</li>`).join("")}</ul>`:""}
          <span class="booking-pax-badge">${t.pax} pax capacity</span>
          <!-- ${ae(t.pax)} -->
        </td>
        <td class="booking-col-rate" data-label="Rate / pax">
          <span class="tent-rate-display">${u(o.rate)}</span>
          <small>per pax · ${o.label}</small>
        </td>
        <td class="booking-col-qty" data-label="Qty of Tents">
          ${Zt(t,e.quantity,e.selected)}
        </td>
        <td class="booking-col-total" data-label="Total">
          <strong class="tent-total-display">${u(a)}</strong>
        </td>
      </tr>`}function se(t){const e=ft(t);return e==="premium"?'<p class="booking-track-hint booking-track-hint--premium">Premium transfer selected — you may add other Premium packages only. Comfort and Luxury packages cannot be combined. Deselect all Premium packages to switch.</p>':e==="campsite"?'<p class="booking-track-hint booking-track-hint--campsite">Comfort &amp; Luxury selected — you may combine these packages. Premium transfer packages cannot be added to this order. Deselect all to switch to Premium.</p>':'<p class="booking-track-hint">Select either <strong>Comfort &amp; Luxury</strong> packages (Ziro campsite) or <strong>Premium</strong> transfer packages — not both in the same booking.</p>'}const le={"Ziro Campsite":"campsite","Guwahati Central":"guwahati","Naharlagun Station":"naharlagun","Holongi Airport":"holongi"},ce={"Guwahati Central":"/guwahati-expedition.html","Naharlagun Station":"/naharlagun-shuttle.html","Holongi Airport":"/holongi-fly-in.html"};function Tt(t){let e="";Mt.forEach(a=>{const i=v.filter(f=>f.group===a);if(!i.length)return;const r=le[a]||"default",b=ce[a],c=b?`<a href="${b}" class="booking-group-link">Learn more</a>`:"";e+=`<tr class="booking-group-row booking-group-row--${r}"><td colspan="7"><div class="booking-group-header"><span class="booking-group-title">${a}</span>${c}</div></td></tr>`,i.forEach(f=>{const k=t.find(D=>D.id===f.id);e+=re(f,k,t)})});const n=X(t),o=$(t);return`
    <div class="booking-panel" data-panel="1">
      <p class="booking-panel-lead">Choose your packages, duration, and quantity. Total per row = quantity × rate × pax capacity.</p>
      ${se(t)}
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
    </div>`}function qt(t,e){const n=$(e),o=z(t,e),a=O.map(i=>{const r=t.find(c=>c.id===i.id),b=r.selected?i.rate*n:0;return`
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
          <strong class="addon-total-display">${u(b)}</strong>
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
    </div>`}function At(t,e,n={}){const o=$(t),a=X(t),i=F(t),r=z(e,t),b=a+r,c=Math.round(b*.5),f=c,k=R(n.contactName??""),D=R(n.contactPhone??""),M=R(n.contactEmail??""),C=R(n.transactionId??""),l=n.preferredDates||"24th, 25th and 26th",d=lt(n.vegPax??0,o),s=t.filter(m=>m.selected).map(m=>{const g=v.find(x=>x.id===m.id),h=H(g,m.optionKey);return`<li>${m.quantity}× ${g.name} · ${h.label} · ${u(G(g,m))}</li>`}).join("")||"<li>No packages selected</li>";let p;return i?p=`
          <div class="summary-block">
            <h4>Daytime Add-ons</h4>
            <ul>${e.filter(g=>g.selected).map(g=>{const h=O.find(x=>x.id===g.id);return`<li>${Y(h)} · ${o} pax · ${u(h.rate*o)}</li>`}).join("")||"<li>No add-ons selected</li>"}</ul>
            <p class="summary-line-total">${u(r)}</p>
          </div>`:p=`
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
            <ul>${s}</ul>
            <p class="summary-line-total">${u(a)}</p>
          </div>
          ${p}
          <div class="summary-block summary-block--fees">
            <div class="summary-fee-row">
              <span>Order Subtotal</span>
              <strong id="order-subtotal">${u(b)}</strong>
            </div>
            <div class="summary-fee-row">
              <span>Booking Fee (50%)</span>
              <strong id="booking-fee">${u(c)}</strong>
            </div>
          </div>
          <div class="summary-grand">
            <span>Amount to Pay (${o} pax)</span>
            <strong id="grand-total">${u(f)}</strong>
          </div>
        </div>

        <form class="booking-form" id="booking-form" novalidate>
          <h3>Complete Your Booking</h3>
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
          </fieldset>
          <div class="form-field">
            <label for="contact-name">Primary Contact Person</label>
            <input type="text" id="contact-name" name="contactName" required autocomplete="name" placeholder="Full name" value="${k}" />
          </div>
          <div class="form-field">
            <label for="contact-phone">Contact Number</label>
            <input type="tel" id="contact-phone" name="contactPhone" required autocomplete="tel" placeholder="+91 98765 43210" value="${D}" />
          </div>
          <div class="form-field">
            <label for="contact-email">Email</label>
            <input type="email" id="contact-email" name="contactEmail" required autocomplete="email" placeholder="you@example.com" value="${M}" />
          </div>
          <div class="form-field form-field--payment">
            <label>Scan to Pay</label>
            <div class="payment-qr">
              <img src="${Kt}" alt="Ezar Endeavors UPI QR code for payment" width="220" height="220" />
              <p>Pay <strong id="payment-amount">${u(f)}</strong> via UPI, then enter your transaction ID below.</p>
            </div>
          </div>
          <div class="form-field">
            <label for="transaction-id">Transaction ID</label>
            <input type="text" id="transaction-id" name="transactionId" required placeholder="UPI / bank reference number" value="${C}" />
          </div>
          <div class="form-field">
            <label for="veg-pax">Number of Vegetarian Pax</label>
            ${oe(d,o)}
            <small>Out of ${o} total travellers</small>
          </div>
          <button type="submit" class="btn btn-primary btn-block" id="booking-submit-btn">Submit Booking</button>
          <p class="booking-form-note" id="booking-success" hidden>Thank you! Your booking request has been received. We will confirm within 24 hours.</p>
        </form>
      </div>
    </div>`}function de(t){const{currentStep:e,tentState:n,addonState:o,formDraft:a}=t;$(n);const i=$t(n,o),{totalSteps:r}=A(n);return`
    <nav class="booking-steps booking-steps--${r}" aria-label="Booking progress">${xt(e,n)}</nav>
    <div class="booking-panels">
      ${Tt(n)}
      ${qt(o,n)}
      ${At(n,o,a)}
    </div>
    <div class="booking-actions">
      <button type="button" class="btn btn-outline" id="booking-prev" ${e===1?"disabled":""}>← Back to Edit</button>
      <div class="booking-running-total">
        <span>Booking fee (50%)</span>
        <strong id="running-total">${u(i)}</strong>
      </div>
      <button type="button" class="btn btn-primary" id="booking-next">${e===r?"Review":"Continue"}</button>
    </div>
    <p class="booking-error" id="booking-error" role="alert" hidden></p>`}function B(t,e,n){const o=kt(e,n);t.querySelectorAll(".booking-panel").forEach(c=>{c.hidden=Number(c.dataset.panel)!==o});const{totalSteps:a}=A(n),i=t.querySelector("#booking-prev"),r=t.querySelector("#booking-next");i&&(i.disabled=e===1),r&&(r.textContent=e===a?"Review":e===a-1?"Continue to Summary":"Continue");const b=t.querySelector(".booking-steps");b&&(b.className=`booking-steps booking-steps--${a}`)}function at(t,e,n){const o=t.querySelector(".booking-steps");o&&(o.innerHTML=xt(e,n),o.className=`booking-steps booking-steps--${A(n).totalSteps}`)}function mt(t,e){const n=t.querySelector('[data-panel="1"]');if(!n)return;const o=document.createElement("div");o.innerHTML=Tt(e.tentState),n.replaceWith(o.firstElementChild),B(t,e.currentStep,e.tentState)}function ue(t,e){const n=st(e.tentState,e.addonState),o=tt(e.tentState,e.addonState),a=t.querySelector("#order-subtotal"),i=t.querySelector("#booking-fee"),r=t.querySelector("#grand-total"),b=t.querySelector("#payment-amount");a&&(a.textContent=u(n)),i&&(i.textContent=u(o)),r&&(r.textContent=u(o)),b&&(b.textContent=u(o))}function Z(t,e){const n=t.querySelector("#running-total");n&&(n.textContent=u($t(e.tentState,e.addonState))),ue(t,e),Nt(e),Ct()}let P=null;function pe(){const t=document.getElementById("booking-sticky-checkout");P==null||P.disconnect(),P=null,t&&(t.hidden=!0,t.classList.add("is-hidden")),document.body.classList.remove("has-booking-sticky-checkout")}function Nt(t){const e=document.getElementById("booking-sticky-checkout");if(!e||document.body.classList.contains("booking-confirmed"))return;const n=$(t.tentState),o=tt(t.tentState,t.addonState),a=e.querySelector("#sticky-total-pax"),i=e.querySelector("#sticky-booking-amount");if(a&&(a.textContent=n),i&&(i.textContent=u(o)),n<=0){e.hidden=!0,e.classList.add("is-hidden"),document.body.classList.remove("has-booking-sticky-checkout"),P==null||P.disconnect(),P=null;return}e.hidden=!1}function Ct(){const t=document.getElementById("booking-sticky-checkout"),e=document.getElementById("booking-submit-btn");if(P==null||P.disconnect(),P=null,!(!t||t.hidden||document.body.classList.contains("booking-confirmed"))){if(!e){t.classList.remove("is-hidden"),document.body.classList.add("has-booking-sticky-checkout");return}P=new IntersectionObserver(([n])=>{const o=n.isIntersecting;t.classList.toggle("is-hidden",o),document.body.classList.toggle("has-booking-sticky-checkout",!o&&!t.hidden)},{threshold:.35,rootMargin:"0px 0px -1px 0px"}),P.observe(e)}}function nt(){var t;(t=document.getElementById("booking-submit-btn"))==null||t.scrollIntoView({behavior:"smooth",block:"center"})}function me(t,e,n){const o=A(e.tentState);if(I(e.currentStep,e.tentState)){nt();return}if(e.currentStep===1){const a=It(e,1);if(a){const i=t.querySelector("#booking-error");i&&(i.textContent=a,i.hidden=!1,i.classList.remove("booking-notice"));return}if(o.showAddons){n(2);return}n(o.totalSteps),window.setTimeout(nt,400);return}rt(e.currentStep,e.tentState)&&(n(o.totalSteps),window.setTimeout(nt,400))}function ge(t,e,n){const o=document.getElementById("sticky-checkout-btn");!o||o.dataset.bound==="true"||(o.dataset.bound="true",o.addEventListener("click",()=>{me(t,e,n)}),Nt(e),Ct())}function wt(t,e,n){const o=t.querySelector(`tr[data-tent-id="${e.id}"]`);if(!o)return;const a=H(e,n.optionKey);o.classList.toggle("is-selected",n.selected),o.querySelector(".tent-rate-display").textContent=u(a.rate),o.querySelector(".tent-rate-display + small").textContent=`per pax · ${a.label}`,o.querySelector(".tent-total-display").textContent=u(G(e,n)),o.querySelectorAll(".tent-option").forEach(c=>{c.disabled=!n.selected,c.checked=n.selected&&c.value===n.optionKey});const i=o.querySelector(".tent-qty"),r=o.querySelector(".tent-qty-minus"),b=o.querySelector(".tent-qty-plus");i&&(i.value=n.quantity,i.disabled=!n.selected),r&&(r.disabled=!n.selected||n.quantity<=_),b&&(b.disabled=!n.selected||n.quantity>=J)}function ot(t,e,n,o){const a=e.tentState.find(r=>r.id===n),i=v.find(r=>r.id===n);!a||!i||!a.selected||(a.quantity=yt(o),wt(t,i,a),Et(t,e),Lt(t,e))}function Et(t,e){const n=t.querySelector("#tents-subtotal"),o=t.querySelector("#tents-total-pax");n&&(n.textContent=u(X(e.tentState))),o&&(o.textContent=$(e.tentState))}function fe(t,e,n,o){const a=t.querySelector(`tr[data-addon-id="${e.id}"]`);if(!a)return!1;const i=n.selected?e.rate*o:0;a.classList.toggle("is-selected",n.selected),a.querySelector(".addon-check").checked=n.selected,a.querySelector(".addon-total-display").textContent=u(i);const r=a.querySelector(".booking-pax-readonly");return r&&(r.textContent=o),!0}function be(t,e){$(e.tentState);const n=t.querySelector("#addons-subtotal");n&&(n.textContent=u(z(e.addonState,e.tentState)))}function it(t,e){const n=t.querySelector('[data-panel="2"]');if(!n)return;const o=document.createElement("div");o.innerHTML=qt(e.addonState,e.tentState),n.replaceWith(o.firstElementChild),B(t,e.currentStep,e.tentState)}function L(t,e){const n=t.querySelector('[data-panel="3"]');if(!n)return;Dt(t,e);const o=document.createElement("div");o.innerHTML=At(e.tentState,e.addonState,e.formDraft),n.replaceWith(o.firstElementChild),B(t,e.currentStep,e.tentState)}function Dt(t,e){var o;const n=t.querySelector("#booking-form");n&&(e.formDraft={preferredDates:((o=n.preferredDates)==null?void 0:o.value)??"",contactName:n.contactName.value,contactPhone:n.contactPhone.value,contactEmail:n.contactEmail.value,transactionId:n.transactionId.value,vegPax:n.vegPax.value})}function It(t,e){if(e===1){const n=$(t.tentState);if(!t.tentState.some(a=>a.selected&&a.quantity>0))return"Select at least one package to continue.";if(n===0)return"Total pax must be greater than zero.";if(Ut(t.tentState))return"Premium packages cannot be combined with Comfort or Luxury packages in the same booking."}return null}function he(t,e){const n=t.tentState.find(a=>a.id===e),o=v.find(a=>a.id===e);n&&o&&(ht(t.tentState,o),n.selected=!0)}function gt(t,e){const n=t.querySelector("#booking-error");n&&(n.textContent=e,n.hidden=!1,n.classList.add("booking-notice"))}function Lt(t,e){const n=A(e.tentState);at(t,e.currentStep,e.tentState),e.currentStep>n.totalSteps?(e.currentStep=n.totalSteps,at(t,e.currentStep,e.tentState),L(t,e),bindFormSubmit(t,e)):e.currentStep===2&&!n.showAddons?(L(t,e),bindFormSubmit(t,e)):rt(e.currentStep,e.tentState)?it(t,e):I(e.currentStep,e.tentState)&&(L(t,e),bindFormSubmit(t,e)),B(t,e.currentStep,e.tentState),Z(t,e),Pt(e)}function ke(){const t=document.getElementById("booking-wizard");if(!t)return;const e=Ot(),n={currentStep:(e==null?void 0:e.currentStep)??1,tentState:e!=null&&e.tentState?zt(e.tentState):St(),addonState:e!=null&&e.addonState?te(e.addonState):vt(),formDraft:(e==null?void 0:e.formDraft)??{}};function o(){Pt(n)}const a=new URLSearchParams(window.location.search).get("tent");a&&he(n,{"double-dome":"classic-dome-double","alpine-twin":"premium-alpine-twin","alpine-three":"premium-alpine-triple"}[a]||a);const r=A(n.tentState);n.currentStep>r.totalSteps&&(n.currentStep=r.totalSteps),n.currentStep<1&&(n.currentStep=1),o();let b=!1;function c(l){var p;I(n.currentStep,n.tentState)&&l<n.currentStep&&Dt(t,n),n.currentStep=l,at(t,l,n.tentState),l===1?mt(t,n):rt(l,n.tentState)?it(t,n):I(l,n.tentState)&&(L(t,n),M(t,n)),B(t,l,n.tentState),C(),Z(t,n),o();const d=t.querySelector("#booking-error");d&&(d.hidden=!0);const s=kt(l,n.tentState);(p=t.querySelector(`[data-panel="${s}"]`))==null||p.scrollIntoView({behavior:"smooth",block:"nearest"})}function f(){t.innerHTML=de(n),B(t,n.currentStep,n.tentState),C(),k(),M(t,n),ge(t,n,c)}function k(){b||(b=!0,t.addEventListener("click",l=>{var g;const d=l.target.closest("[data-step-nav]");if(d&&!d.disabled){const h=Number(d.dataset.stepNav);h<n.currentStep&&c(h);return}if(l.target.closest("#booking-prev")){n.currentStep>1&&c(n.currentStep-1);return}if(!l.target.closest("#booking-next"))return;const s=It(n,n.currentStep),p=t.querySelector("#booking-error");if(s){p.textContent=s,p.hidden=!1,p.classList.remove("booking-notice");return}p.hidden=!0,p.classList.remove("booking-notice");const{totalSteps:m}=A(n.tentState);n.currentStep<m?c(n.currentStep+1):(g=document.getElementById("booking-form"))==null||g.scrollIntoView({behavior:"smooth",block:"start"})}))}function D(l,d){const s=l.querySelector(".veg-pax-input"),p=l.querySelector(".veg-pax-minus"),m=l.querySelector(".veg-pax-plus");if(!s)return;const g=$(d.tentState);function h(x){const w=lt(x,g);s.value=w,p&&(p.disabled=w<=0),m&&(m.disabled=w>=g),d.formDraft.vegPax=String(w),o()}p==null||p.addEventListener("click",x=>{x.preventDefault(),h(Number(s.value)-1)}),m==null||m.addEventListener("click",x=>{x.preventDefault(),h(Number(s.value)+1)}),s.oninput=()=>h(s.value)}function M(l,d){const s=l.querySelector("#booking-form");s&&(D(l,d),s.onsubmit=async p=>{var ut;p.preventDefault();const m=$(d.tentState),g=((ut=s.preferredDates)==null?void 0:ut.value)??"",h=s.contactName.value.trim(),x=s.contactPhone.value.trim(),w=s.contactEmail.value.trim(),ct=s.transactionId.value.trim(),et=Number(s.vegPax.value),q=l.querySelector("#booking-error"),U=s.querySelector('button[type="submit"]'),Bt=s.querySelector("#booking-success");if(!g){q.textContent="Please select your preferred dates.",q.hidden=!1;return}if(!h||!x||!w||!ct){q.textContent="Please fill in all required fields.",q.hidden=!1;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w)){q.textContent="Please enter a valid email address.",q.hidden=!1;return}if(et<0||et>m){q.textContent=`Vegetarian pax must be between 0 and ${m}.`,q.hidden=!1;return}const dt=ee(d.tentState,d.addonState,{preferredDates:g,contactName:h,contactPhone:x,contactEmail:w,transactionId:ct,vegPax:et});q.hidden=!0,Bt.hidden=!0,U.disabled=!0,U.textContent="Submitting...";try{const E=await ne(dt);Xt(l,dt,{totalPax:m,premiumAddonsIncluded:!F(d.tentState),bookingRef:(E==null?void 0:E.bookingId)||(E==null?void 0:E.id)||""})}catch(E){q.textContent=E.message||"Something went wrong submitting your booking. Please try again or contact us on WhatsApp.",q.hidden=!1,U.disabled=!1,U.textContent="Submit Booking"}})}function C(){t.querySelectorAll(".tent-check").forEach(l=>{l.onchange=d=>{const s=d.target.dataset.tentId,p=n.tentState.find(h=>h.id===s),m=v.find(h=>h.id===s),g=t.querySelector("#booking-error");if(g&&g.classList.remove("booking-notice"),d.target.checked){if(!bt(m,n.tentState)){d.target.checked=!1,gt(t,m.isPremium?"Premium packages cannot be combined with Comfort or Luxury. Deselect campsite packages first.":"Comfort and Luxury packages cannot be combined with Premium. Deselect Premium packages first.");return}const h=ht(n.tentState,m);p.selected=!0,h>0?gt(t,m.isPremium?"Switched to Premium — previous Comfort/Luxury selections were removed.":"Switched to Comfort/Luxury — previous Premium selections were removed."):g&&(g.hidden=!0)}else p.selected=!1,g&&g.classList.contains("booking-notice")&&(g.hidden=!0,g.classList.remove("booking-notice"));mt(t,n),Lt(t,n),C()}}),t.querySelectorAll(".tent-option").forEach(l=>{l.onchange=d=>{const s=d.target.dataset.tentId,p=n.tentState.find(g=>g.id===s),m=v.find(g=>g.id===s);p.optionKey=d.target.value,wt(t,m,p),Et(t,n),Z(t,n),I(n.currentStep,n.tentState)&&L(t,n),o(),C()}}),t.querySelectorAll(".tent-qty").forEach(l=>{l.oninput=d=>{ot(t,n,d.target.dataset.tentId,d.target.value),C()}}),t.querySelectorAll(".tent-qty-minus").forEach(l=>{l.onclick=d=>{d.preventDefault();const s=l.dataset.tentId,p=n.tentState.find(m=>m.id===s);ot(t,n,s,p.quantity-1),C()}}),t.querySelectorAll(".tent-qty-plus").forEach(l=>{l.onclick=d=>{d.preventDefault();const s=l.dataset.tentId,p=n.tentState.find(m=>m.id===s);ot(t,n,s,p.quantity+1),C()}}),t.querySelectorAll(".addon-check").forEach(l=>{l.onchange=d=>{const s=d.target.dataset.addonId,p=n.addonState.find(h=>h.id===s),m=O.find(h=>h.id===s),g=$(n.tentState);p.selected=d.target.checked,fe(t,m,p,g)?be(t,n):it(t,n),Z(t,n),I(n.currentStep,n.tentState)&&L(t,n),o()}}),t.querySelectorAll("tr[data-addon-id]").forEach(l=>{l.onclick=d=>{if(d.target.closest(".addon-check"))return;const s=l.querySelector(".addon-check");s&&(s.checked=!s.checked,s.dispatchEvent(new Event("change",{bubbles:!0})))}})}f()}Ht();ke();
