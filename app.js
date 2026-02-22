// Dataset
const jobsData = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "not-applied",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "not-applied",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "not-applied",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "not-applied",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "not-applied",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "not-applied",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "not-applied",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "not-applied",
  },
];

let jobs = jobsData.map((j) => ({ ...j }));
let activeTab = "all";


// Utility Functions

function getDisplayedJobs() {
  if (activeTab === "all") return jobs;
  return jobs.filter((j) => j.status === activeTab);
}

function getInterviewCount() {
  return jobs.filter((j) => j.status === "interview").length;
}

function getRejectedCount() {
  return jobs.filter((j) => j.status === "rejected").length;
}

function statusLabel(status) {
  if (status === "interview") return "INTERVIEW";
  if (status === "rejected") return "REJECTED";
  return "NOT APPLIED";
}

// Dashboard & Counts

function updateDashboard() {
  document.getElementById("total-count").textContent = jobs.length;
  document.getElementById("interview-count").textContent = getInterviewCount();
  document.getElementById("rejected-count").textContent = getRejectedCount();
}

function updateJobsCount() {
  const count = getDisplayedJobs().length;
  document.getElementById("jobs-count").textContent =
    count + (count === 1 ? " job" : " jobs");
}

// Empty State

function createEmptyState() {
  const div = document.createElement("div");
  div.className = "empty-state";
  div.innerHTML = `
    <img src="./Assest/jobs.png" alt="No jobs" class="empty-icon">
    <h3>No jobs available</h3>
    <p>Check back soon for new job opportunities</p>
  `;
  return div;
}



// Main Render
function render() {
  const list = document.getElementById("jobs-list");
  list.innerHTML = "";

  const displayed = getDisplayedJobs();

  if (displayed.length === 0) {
    list.appendChild(createEmptyState());
  } else {
    displayed.forEach((job) => list.appendChild(createJobCard(job)));
  }

  updateDashboard();
  updateJobsCount();
}



// Actions

function setStatus(id, newStatus) {
  const job = jobs.find((j) => j.id === id);
  if (!job) return;
  job.status = job.status === newStatus ? "not-applied" : newStatus;
  render();
}

function deleteJob(id) {
  jobs = jobs.filter((j) => j.id !== id);
  render();
}

// Job Card Creation

function createJobCard(job) {
  const card = document.createElement("div");
  card.className = "job-card";
  card.dataset.id = job.id;

  const meta = `${job.location} &bull; ${job.type} &bull; ${job.salary}`;
  const badgeClass = job.status === "not-applied" ? "not-applied" : job.status;

  card.innerHTML = `
    <div class="job-card-header">
      <span class="company-name">${job.companyName}</span>
      <button class="delete-btn" data-id="${job.id}" title="Remove">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
          <path d="M10 11v6"></path>
          <path d="M14 11v6"></path>
          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
        </svg>
      </button>
    </div>
    <div class="position">${job.position}</div>
    <div class="job-meta">${meta}</div>
    <span class="status-badge ${badgeClass}">${statusLabel(job.status)}</span>
    <p class="description">${job.description}</p>
    <div class="card-actions">
      <button class="btn-interview${job.status === "interview" ? " active" : ""}"
              data-id="${job.id}">Interview</button>
      <button class="btn-rejected${job.status === "rejected" ? " active" : ""}"
              data-id="${job.id}">Rejected</button>
    </div>
  `;
  return card;
}

// Event Listeners

document.getElementById("jobs-list").addEventListener("click", (e) => {
  const del = e.target.closest(".delete-btn");
  const intv = e.target.closest(".btn-interview");
  const rej = e.target.closest(".btn-rejected");

  if (del) deleteJob(Number(del.dataset.id));
  else if (intv) setStatus(Number(intv.dataset.id), "interview");
  else if (rej) setStatus(Number(rej.dataset.id), "rejected");
});

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    activeTab = btn.dataset.tab;
    document.querySelectorAll(".tab").forEach((t) =>
      t.classList.toggle("active", t.dataset.tab === activeTab)
    );
    render();
  });
});

render();
