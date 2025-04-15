variable "instance_type" {
  type        = string
  description = "EC2 instance type (e.g., t2.micro)"
  default     = "t2.micro"
}

variable "allow_ssh_cidr" {
  type        = list(string)
  description = "CIDR block for SSH access"
  default     = ["0.0.0.0/0"]
}

variable "aws_region" {
  type        = string
  description = "AWS region"
  default     = "us-west-2"
}

variable "ami_id" {
  type        = string
  description = "AMI ID for the EC2 instance"
  default     = "ami-0c55b159cbfafe1f0" # Ubuntu 20.04 AMI
}

variable "vpc_cidr" {
  type        = string
  description = "VPC CIDR block"
  default     = "10.0.0.0/16"
}