import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://hlcuwnskouyslmsenmjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsY3V3bnNrb3V5c2xtc2VubWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjk0MTYsImV4cCI6MjA2MTYwNTQxNn0.VjNKCdSwbTwccCOBNTLbltpbjAQaIQ6oVIuMvziyJmU";
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase
  .from("boxes")
  .select("*")
  .order("date", { ascending: false });

const boxList = document.getElementById("boxList");

data.forEach((box) => {
  const div = document.createElement("div");
  div.textContent = `${box.date}: [${box.box_id}] PN: ${box.pn} | Qty: ${box.quantity} @ ${box.location}`;
  boxList.appendChild(div);
});
