import{i as R}from"./core-BQg2YDUh.js";const z="/images/payment/ezar-endeavors-qr.png",U="https://ziro-backend-3qdz.onrender.com/api/booking-expadation",b=1,E=20,F=.2;function r(e){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(e)}function O(e=new Date){return e.toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})}function c(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function W(e){return Math.min(E,Math.max(b,Number(e)||b))}function T(e,n){return Math.min(n,Math.max(0,Number(e)||0))}function X(e){const n=e<=b?"disabled":"",o=e>=E?"disabled":"";return`
    <div class="booking-qty-stepper expedition-pax-stepper">
      <button type="button" class="booking-qty-btn expedition-pax-minus" aria-label="Decrease number of pax" ${n}>−</button>
      <input type="number" id="expedition-pax" name="pax" class="booking-qty expedition-pax-input" min="${b}" max="${E}" value="${e}" required aria-label="Number of pax" />
      <button type="button" class="booking-qty-btn expedition-pax-plus" aria-label="Increase number of pax" ${o}>+</button>
    </div>`}function j(e,n){const o=T(e,n),t=o<=0?"disabled":"",i=o>=n?"disabled":"";return`
    <div class="booking-qty-stepper booking-qty-stepper--veg expedition-veg-stepper">
      <button type="button" class="booking-qty-btn expedition-veg-minus" aria-label="Decrease number of vegetarian" ${t}>−</button>
      <input type="number" id="expedition-veg" name="vegPax" class="booking-qty expedition-veg-input" min="0" max="${n}" value="${o}" required aria-label="Number of vegetarian" />
      <button type="button" class="booking-qty-btn expedition-veg-plus" aria-label="Increase number of vegetarian" ${i}>+</button>
    </div>`}function L(e,n){const o=e*n,t=Math.round(o*F),i=o-t;return{totalAmount:o,bookingAmount:t,balanceAmount:i}}function H(e){const n=e.bookingRef?`<p class="booking-confirmation-meta">Booking reference: ${c(e.bookingRef)}</p>`:"";return`
    <article class="booking-confirmation expedition-booking-confirmation" id="expedition-booking-confirmation">
      <header class="booking-confirmation-header">
        <span class="booking-confirmation-badge">Booking Confirmed</span>
        <h2>Your Expedition Booking Summary</h2>
        <p>Thank you, <strong>${c(e.name)}</strong>. We have received your expedition booking and will confirm within 24 hours.</p>
        <p class="booking-confirmation-meta">Submitted on ${c(e.submittedAt)}</p>
        ${n}
      </header>

      <div class="booking-confirmation-sheet">
        <section class="booking-confirmation-section">
          <h3>Contact Details</h3>
          <dl class="booking-confirmation-details">
            <div><dt>Name</dt><dd>${c(e.name)}</dd></div>
            <div><dt>Email</dt><dd>${c(e.emailId)}</dd></div>
            <div><dt>Phone</dt><dd>${c(e.phoneNo)}</dd></div>
            ${e.transactionNo?`<div><dt>Transaction No</dt><dd>${c(e.transactionNo)}</dd></div>`:""}
          </dl>
        </section>

        <section class="booking-confirmation-section">
          <h3>Expedition</h3>
          <dl class="booking-confirmation-details">
            <div><dt>Package</dt><dd>${c(e.packageName)}</dd></div>
            <div><dt>Total Pax</dt><dd>${e.totalPax}</dd></div>
            <div><dt>Vegetarian Pax</dt><dd>${e.totalVegPax} of ${e.totalPax}</dd></div>
          </dl>
        </section>

        <section class="booking-confirmation-section booking-confirmation-section--totals">
          <h3>Payment Summary</h3>
          <div class="booking-confirmation-totals">
            <div class="booking-confirmation-total-row">
              <span>Total Amount</span>
              <strong>${r(e.totalAmount)}</strong>
            </div>
            <div class="booking-confirmation-total-row">
              <span>Advance Paid (20% non-refundable)</span>
              <strong>${r(e.bookingAmount)}</strong>
            </div>
            <div class="booking-confirmation-total-row booking-confirmation-total-row--grand">
              <span>Balance Due</span>
              <strong>${r(e.balanceAmount)}</strong>
            </div>
          </div>
        </section>

        <footer class="booking-confirmation-footer">
          <p><strong>Wildnest Adventures</strong> · Post-ZFM Expeditions 2026</p>
          <p>+918822659172 · wildnestadventures@gmail.com</p>
          <p>&copy; Ezar Endeavors &amp; Wildnest Adventures</p>
        </footer>
      </div>

      <div class="booking-confirmation-actions no-print">
        <button type="button" class="btn btn-primary" id="expedition-print-btn">Print Summary</button>
        <a href="/post-zfm-expeditions.html" class="btn btn-outline">View All Expeditions</a>
      </div>
    </article>`}function Q(e,n){var o,t;e.innerHTML=H(n),(o=e.querySelector("#expedition-print-btn"))==null||o.addEventListener("click",()=>{window.print()}),(t=document.getElementById("expedition-booking-confirmation"))==null||t.scrollIntoView({behavior:"smooth",block:"start"})}async function Z(e){const n=await fetch(U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok){let o="";try{const t=await n.json();o=(t==null?void 0:t.message)||(t==null?void 0:t.error)||""}catch{}throw new Error(o||`Request failed (${n.status})`)}return n.json().catch(()=>({}))}function G(){const e=document.querySelector("[data-expedition-booking]");if(!e)return;const n=e.dataset.expeditionName||"Post-ZFM Expedition",o=Number(e.dataset.pricePerPax)||0;let t=b,i=0,{totalAmount:g,bookingAmount:p,balanceAmount:f}=L(o,t);e.innerHTML=`
      <div class="expedition-booking-card" id="expedition-booking-card">
        <header class="expedition-booking-header">
          <h2>Book This Expedition</h2>
          <p class="expedition-booking-subtitle">${n}</p>
          <p class="expedition-booking-rate">${r(o)} <span>per person</span></p>
        </header>
        <form class="expedition-booking-form" id="expedition-booking-form" novalidate>
          <div class="form-field">
            <label for="expedition-contact-name">Name</label>
            <input type="text" id="expedition-contact-name" name="contactName" required autocomplete="name" placeholder="Full name" />
          </div>
          <div class="form-field">
            <label for="expedition-contact-phone">Contact No</label>
            <input type="tel" id="expedition-contact-phone" name="contactPhone" required autocomplete="tel" placeholder="+91 98765 43210" />
          </div>
          <div class="form-field">
            <label for="expedition-contact-email">Contact Email</label>
            <input type="email" id="expedition-contact-email" name="contactEmail" required autocomplete="email" placeholder="you@example.com" />
          </div>
          <div class="form-field">
            <label for="expedition-pax">No of Pax</label>
            ${X(t)}
          </div>
          <div class="form-field">
            <label for="expedition-veg">No of Vegetarian</label>
            ${j(i,t)}
          </div>
          <div class="expedition-booking-amounts">
            <div class="expedition-amount-row">
              <span>Total Amount</span>
              <strong id="expedition-total-amount">${r(g)}</strong>
            </div>
            <div class="expedition-amount-row expedition-amount-row--advance">
              <span>Advance Amount <small>(20% non-refundable)</small></span>
              <strong id="expedition-advance-amount">${r(p)}</strong>
            </div>
            <div class="expedition-amount-row">
              <span>Balance Amount</span>
              <strong id="expedition-balance-amount">${r(f)}</strong>
            </div>
          </div>
          <div class="form-field form-field--payment">
            <label>QR Code to Pay</label>
            <div class="payment-qr expedition-payment-qr">
              <img src="${z}" alt="Ezar Endeavors UPI QR code for payment" width="150" height="150" />
              <p>Pay <strong id="expedition-payment-amount">${r(p)}</strong> advance via UPI, then enter your transaction ID below.</p>
            </div>
          </div>
          <div class="form-field">
            <label for="expedition-transaction-id">Transaction No</label>
            <input type="text" id="expedition-transaction-id" name="transactionId" required placeholder="UPI / bank reference number" />
          </div>
          <button type="submit" class="btn btn-expedition-glow btn-block">Book Now</button>
        </form>
        <p class="expedition-booking-error" id="expedition-booking-error" role="alert" hidden></p>
      </div>`;const V=e.querySelector("#expedition-booking-card"),l=e.querySelector("#expedition-booking-form"),m=e.querySelector(".expedition-pax-input"),x=e.querySelector(".expedition-pax-minus"),v=e.querySelector(".expedition-pax-plus"),u=e.querySelector(".expedition-veg-input"),k=e.querySelector(".expedition-veg-minus"),h=e.querySelector(".expedition-veg-plus"),A=e.querySelector("#expedition-total-amount"),S=e.querySelector("#expedition-advance-amount"),I=e.querySelector("#expedition-balance-amount"),C=e.querySelector("#expedition-payment-amount"),s=e.querySelector("#expedition-booking-error");function B(){({totalAmount:g,bookingAmount:p,balanceAmount:f}=L(o,t)),A&&(A.textContent=r(g)),S&&(S.textContent=r(p)),I&&(I.textContent=r(f)),C&&(C.textContent=r(p))}function N(d){t=W(d),m&&(m.value=t),x&&(x.disabled=t<=b),v&&(v.disabled=t>=E),y(i),B()}function y(d){i=T(d,t),u&&(u.value=i,u.max=t),k&&(k.disabled=i<=0),h&&(h.disabled=i>=t)}x==null||x.addEventListener("click",d=>{d.preventDefault(),N(t-1)}),v==null||v.addEventListener("click",d=>{d.preventDefault(),N(t+1)}),m==null||m.addEventListener("input",()=>N(m.value)),k==null||k.addEventListener("click",d=>{d.preventDefault(),y(i-1)}),h==null||h.addEventListener("click",d=>{d.preventDefault(),y(i+1)}),u==null||u.addEventListener("input",()=>y(u.value)),l==null||l.addEventListener("submit",async d=>{d.preventDefault();const $=l.contactName.value.trim(),w=l.contactPhone.value.trim(),P=l.contactEmail.value.trim(),D=l.transactionId.value.trim(),q=l.querySelector('button[type="submit"]');if(!$||!w||!P||!D){s.textContent="Please fill in all required fields.",s.hidden=!1;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P)){s.textContent="Please enter a valid email address.",s.hidden=!1;return}if(i<0||i>t){s.textContent=`Vegetarian count must be between 0 and ${t}.`,s.hidden=!1;return}const M={name:$,emailId:P,phoneNo:w,packageName:n,totalPax:t,totalVegPax:i,totalAmount:g,bookingAmount:p,balanceAmount:f};s.hidden=!0,q.disabled=!0,q.textContent="Booking...";try{const a=await Z(M),_={name:$,emailId:P,phoneNo:w,packageName:n,totalPax:t,totalVegPax:i,totalAmount:g,bookingAmount:p,balanceAmount:f,transactionNo:D,submittedAt:O(),bookingRef:(a==null?void 0:a.bookingRef)||(a==null?void 0:a.bookingReference)||(a==null?void 0:a.reference)||(a==null?void 0:a.id)||""};Q(V,_)}catch(a){s.textContent=(a==null?void 0:a.message)||"Something went wrong submitting your expedition booking. Please try again or contact us on WhatsApp.",s.hidden=!1,q.disabled=!1,q.textContent="Book Now"}})}R();G();
