variable "load_balancer_name" {
  type        = string
  description = "Name of the load balancer"
  default     = "web-alb"
}

variable "subnet_ids" {
  type        = list(string)
  description = "List of subnet IDs"
  default     = []
}

variable "vpc_id" {
  type        = string
  description = "VPC ID"
  default     = ""
}
