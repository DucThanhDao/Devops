variable "ami_id" {
  type        = string
  description = "AMI ID for the EC2 instance"
  default     = "ami-0c55b159cbfafe1f0" # Ubuntu 20.04 AMI
}

variable "instance_type" {
  type        = string
  description = "EC2 instance type (e.g., t2.micro)"
  default     = "t2.micro"
}

variable "allowed_ssh_cidr" {
  type        = string
  description = "CIDR block for SSH access"
  default     = "0.0.0.0/0"
}

variable "vpc_id" {
  type        = string
  description = "VPC ID"
  default     = ""
}

variable "subnet_ids" {
  type        = list(string)
  description = "List of subnet IDs"
  default     = []
}

variable "target_group_arn" {
  type        = string
  description = "ARN of the target group"
  default     = ""
}

variable "alb_sg_id" {
  type        = string
  description = "Name of the application security group"
  default     = ""
}