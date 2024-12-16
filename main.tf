# Terraform Provider Configuration for Google Cloud
provider "google" {
  
  project     = "logesh-all-test"
  region      = "us-central1"
}

# Google Cloud Run Service
resource "google_cloud_run_service" "myprofile" {
  name     = "myprofile-service"
  location = "us-central1"


  template {
    spec {
      containers {
        image = "docker.io/logeshk98/myprofile:lateset"  
         ports {
        container_port = 80  # Explicitly use port 80
        }
      }
    }
  }

  traffic {
    percent           = 100
    latest_revision   = true
  }
}

resource "google_cloud_run_service_iam_member" "unauthenticated_access" {
  service  = google_cloud_run_service.myprofile.name
  location = google_cloud_run_service.myprofile.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
# Enable Cloud Run API
resource "google_project_service" "run" {
  project = "logesh-all-test"
  service = "run.googleapis.com"
}

# Enable Container Registry API
resource "google_project_service" "container_registry" {
  project = "logesh-all-test"
  service = "containerregistry.googleapis.com"
}

# Output the Cloud Run URL
output "cloud_run_url" {
  value = google_cloud_run_service.myprofile.status[0].url
}



