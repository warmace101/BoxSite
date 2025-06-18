import { c as createClient } from "./main-CrVpvzNT.js";
const supabaseUrl = "https://hlcuwnskouyslmsenmjb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsY3V3bnNrb3V5c2xtc2VubWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjk0MTYsImV4cCI6MjA2MTYwNTQxNn0.VjNKCdSwbTwccCOBNTLbltpbjAQaIQ6oVIuMvziyJmU";
const supabase = createClient(supabaseUrl, supabaseKey);
window.onload = async () => {
  const loader = document.getElementById("loader");
  const boxList = document.getElementById("boxList");
  if (!loader || !boxList) {
    console.error("Element with id 'boxList' not found.");
    return;
  }
  loader.style.display = "block";
  boxList.style.display = "none";
  setTimeout(
    () => {
      loader.style.display = "none";
      boxList.style.display = "block";
    },
    5e3
  );
  const { data, error } = await supabase.from("boxes").select("*").order("date", { ascending: false });
  if (error) {
    console.error("Error loading boxes:", error);
    boxList.textContent = "Failed to load boxes.";
    return;
  }
  data.forEach((box) => {
    const div = document.createElement("div");
    div.textContent = `--PN: ${box.pn} / QTY: ${box.quantity} / DATE: ${box.date} @ ${box.location} BOX-ID ${box.box_id} <button>Delete</button>`;
    boxList.appendChild(div);
  });
};
