import { c as createClient } from "./main-CrVpvzNT.js";
const supabaseUrl = "https://hlcuwnskouyslmsenmjb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsY3V3bnNrb3V5c2xtc2VubWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjk0MTYsImV4cCI6MjA2MTYwNTQxNn0.VjNKCdSwbTwccCOBNTLbltpbjAQaIQ6oVIuMvziyJmU";
const supabase = createClient(supabaseUrl, supabaseKey);
const form = document.getElementById("boxForm");
form == null ? void 0 : form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const pn = formData.get("pn");
  const quantity = formData.get("quantity");
  const date = formData.get("date");
  const box_id = formData.get("box_id");
  const location = formData.get("location");
  const res = await fetch("http://localhost:3000/validate", {
    method: "POST",
    body: JSON.stringify({
      pn,
      quantity,
      date,
      box_id,
      location
    })
  });
  const res_data = await res.json();
  if (!res.ok) {
    alert("Validation failed: ");
    return;
  }
  alert("Validation successful! " + res_data.message);
  console.log("Form Data:", {
    pn,
    quantity,
    date,
    box_id,
    location
  });
  const { data, error } = await supabase.from("boxes").insert([
    {
      pn,
      quantity,
      date,
      box_id,
      location
    }
  ]);
  if (error) {
    alert("Error saving: " + error.message);
  } else {
    alert("Box info saved!");
    form.reset();
  }
});
