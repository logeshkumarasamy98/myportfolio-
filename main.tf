provider "google" {
  credentials = file(var.GOOGLE_APPLICATION_CREDENTIALS)  # Path to your service account JSON key
  project     = var.gcp_project_id
  region      = var.gcp_region
}

resource "google_cloud_run_service" "myprofile" {
  name     = "myprofile-service"
  location = var.gcp_region

  template {
    spec {
      containers {
        image = "docker.io/${var.docker_image_name}"  # Docker Hub image name
      }
    }
  }

  traffic {
    percent = 100
    latest_revision = true
  }
}

resource "google_project_service" "run" {
  project = var.gcp_project_id
  service = "run.googleapis.com"
}

resource "google_project_service" "container_registry" {
  project = var.gcp_project_id
  service = "containerregistry.googleapis.com"
}

output "cloud_run_url" {
  value = google_cloud_run_service.myprofile.status[0].url
}
