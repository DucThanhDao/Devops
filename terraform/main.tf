# Deploy VPC
module "vpc" {
  source   = "./modules/vpc"
  vpc_cidr = var.vpc_cidr
}

# Deploy ALB
module "alb" {
  source = "./modules/alb"

  vpc_id             = module.vpc.vpc_id
  subnet_ids         = module.vpc.public_subnets
  load_balancer_name = "web-alb"
}

# Deploy ASG
module "asg" {
  source = "./modules/asg"

  vpc_id           = module.vpc.vpc_id
  subnet_ids       = module.vpc.private_subnets
  target_group_arn = module.alb.target_group_arn
  alb_sg_id        = module.alb.alb_sg_id
  ami_id           = var.ami_id
  instance_type    = var.instance_type
}
