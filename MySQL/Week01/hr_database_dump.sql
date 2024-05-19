-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: HR
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `employee_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `hire_date` date NOT NULL,
  `job_title` varchar(100) NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  `location_id` int DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `email` (`email`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `locations` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Erik','Larsson','erik.larsson@example.com','070-1234567','2020-01-15','Manager',60000.00,1),(2,'Anna','Johansson','anna.johansson@example.com','070-2345678','2019-03-22','Developer',55000.00,2),(3,'Karin','Svensson','karin.svensson@example.com','070-3456789','2018-06-30','Analyst',50000.00,3),(4,'Lars','Nilsson','lars.nilsson@example.com','070-4567890','2021-02-12','Designer',48000.00,4),(5,'Ingrid','Persson','ingrid.persson@example.com','070-5678901','2022-11-25','Tester',45000.00,5),(6,'Björn','Andersson','bjorn.andersson@example.com','070-6789012','2017-09-14','Support',43000.00,6),(7,'Maja','Eriksson','maja.eriksson@example.com','070-7890123','2020-07-19','Admin',62000.00,7),(8,'Johan','Berg','johan.berg@example.com','070-8901234','2016-12-11','Consultant',51000.00,8),(9,'Elin','Sandberg','elin.sandberg@example.com','070-9012345','2018-05-08','Specialist',53000.00,9),(10,'Nils','Hansson','nils.hansson@example.com','070-0123456','2019-10-03','Coordinator',47000.00,10);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Storgatan 1','Stockholm','Stockholm','11122'),(2,'Sveavägen 45','Gothenburg','Västra Götaland','41125'),(3,'Drottninggatan 12','Malmö','Skåne','21133'),(4,'Lundavägen 75','Lund','Skåne','22363'),(5,'Norrmalmstorg 4','Uppsala','Uppsala','75320'),(6,'Stortorget 8','Västerås','Västmanland','72215'),(7,'Kungsgatan 10','Örebro','Örebro','70211'),(8,'Bergsgatan 3','Linköping','Östergötland','58224'),(9,'Hamngatan 5','Helsingborg','Skåne','25223'),(10,'Södra Förstadsgatan 9','Jönköping','Jönköping','55321');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-19 22:13:29
