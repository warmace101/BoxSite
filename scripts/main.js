import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Connect to Supabase
const supabaseUrl = "https://hlcuwnskouyslmsenmjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsY3V3bnNrb3V5c2xtc2VubWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjk0MTYsImV4cCI6MjA2MTYwNTQxNn0.VjNKCdSwbTwccCOBNTLbltpbjAQaIQ6oVIuMvziyJmU";
const supabase = createClient(supabaseUrl, supabaseKey);

// Form submission handler
const form = document.getElementById("boxForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form submission behavior (page reload)

  const { data, error } = await supabase
    .from("boxes") // The table name
    .insert([
      {
        pn: document.getElementById("pn").value,
        quantity: parseInt(document.getElementById("quantity").value),
        date: document.getElementById("date").value,
        box_id: document.getElementById("box_id").value,
        location: document.getElementById("location").value,
      },
    ]);

  if (error) {
    alert("Error saving: " + error.message);
  } else {
    alert("Box info saved!");
    form.reset(); // Clears the form after successful submission
  }
});
