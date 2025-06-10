import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://hlcuwnskouyslmsenmjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsY3V3bnNrb3V5c2xtc2VubWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjk0MTYsImV4cCI6MjA2MTYwNTQxNn0.VjNKCdSwbTwccCOBNTLbltpbjAQaIQ6oVIuMvziyJmU";
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase
  .from("boxes")
  .select("*")
  .order("date", { ascending: false });

if (error) {
  console.error("Error loading boxes:", error);
  boxList.textContent = "Failed to load boxes.";
  return;
}

const boxList = document.getElementById("boxList");
// Data being created then stored on the HTML page.
data.forEach((box) => {
  const div = document.createElement("div");
  div.innerHTML = `--PN: ${box.pn} / QTY: ${box.quantity} / DATE: ${box.date} @ ${box.location}`;
  boxList.appendChild(div);
});

//${box.date}: [PN: ${box.pn} | Qty: ${box.quantity}
