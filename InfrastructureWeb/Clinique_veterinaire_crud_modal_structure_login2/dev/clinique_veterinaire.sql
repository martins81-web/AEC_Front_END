-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 15-Jul-2020 às 15:59
-- Versão do servidor: 8.0.18
-- versão do PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `clinique_veterinaire`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `animaux`
--

CREATE TABLE `animaux` (
  `id` int(11) NOT NULL,
  `nom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `dateDeNaissance` date NOT NULL,
  `id_type` int(11) NOT NULL,
  `id_proprietairePriorite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `animaux`
--

INSERT INTO `animaux` (`id`, `nom`, `dateDeNaissance`, `id_type`, `id_proprietairePriorite`) VALUES
(41, 'Pipo', '1990-02-20', 40, 6),
(42, 'BlackJack', '1999-03-16', 2, 2),
(44, 'Channel', '2001-12-12', 1, 5),
(50, 'Nico', '2020-03-30', 1, 9),
(51, 'Skip', '1998-04-12', 2, 7),
(52, 'Garfield', '1989-09-04', 1, 1),
(53, 'Tom', '1992-01-12', 1, 11),
(55, 'Jerry', '1914-05-14', 6, 8),
(56, 'Rocky', '2012-09-07', 2, 3),
(60, 'Mickey', '2009-11-03', 6, 8),
(61, 'Minnie', '2002-08-14', 6, 6),
(64, 'Luna', '2001-05-06', 2, 12),
(66, 'Tango', '1998-08-08', 38, 13);

-- --------------------------------------------------------

--
-- Estrutura da tabela `proprietaires`
--

CREATE TABLE `proprietaires` (
  `id` int(11) NOT NULL,
  `nom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `adresse` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `telephone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `proprietaires`
--

INSERT INTO `proprietaires` (`id`, `nom`, `prenom`, `adresse`, `telephone`) VALUES
(1, 'Martins', 'Eric', 'St-Jean', '5145559999'),
(2, 'Champlain', 'Samuel', 'Montreal', '4384448888'),
(3, 'Bouchard', 'Pierre', 'Sherbrook', '4384458868'),
(5, 'Lapierre', 'Martin', 'Trois-Rivieres', '5146669999'),
(6, 'Doe', 'John', '190, Senecal', '5144248691'),
(7, 'Prince', 'Tina', 'montreal', '4387778882'),
(8, 'Grenier', 'Carl', 'Montreal', '5147522247'),
(9, 'Arias', 'Yariatna', '190, Senecal', '4384112222'),
(10, 'Martins', 'Alvaro', '190, Senecal', '5144248691'),
(11, 'Doe', 'Jane', '190, Senecal', '5144248622'),
(12, 'Dion', ' Celine', 'Miami', '4398765432'),
(13, 'Mercury', 'Freddy', 'London', '5148885511'),
(14, 'Desjardins', 'Liam', 'Trois-Rivières', '4389974111');

-- --------------------------------------------------------

--
-- Estrutura da tabela `rendezvous`
--

CREATE TABLE `rendezvous` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `heure` time(4) NOT NULL,
  `duree` decimal(10,2) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `id_proprietaire` int(11) NOT NULL,
  `id_veterinaire` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `rendezvous`
--

INSERT INTO `rendezvous` (`id`, `date`, `heure`, `duree`, `id_animal`, `id_proprietaire`, `id_veterinaire`) VALUES
(27, '2020-09-25', '10:35:00.0000', '1.00', 60, 8, 3),
(32, '2020-11-19', '09:02:00.0000', '0.50', 52, 1, 3),
(35, '2020-12-12', '11:00:00.0000', '0.25', 52, 1, 10),
(37, '2021-11-11', '11:11:00.0000', '0.75', 42, 2, 1),
(39, '2020-08-15', '09:30:00.0000', '0.25', 51, 7, 9),
(41, '2021-03-12', '12:10:00.0000', '0.50', 55, 8, 6),
(43, '2020-10-15', '12:13:00.0000', '0.50', 52, 1, 3),
(45, '2020-05-17', '14:15:00.0000', '2.00', 56, 3, 2),
(47, '2020-10-14', '11:11:00.0000', '0.50', 41, 6, 1),
(50, '2020-12-19', '09:45:00.0000', '1.25', 44, 5, 9),
(53, '2020-10-18', '12:15:00.0000', '1.00', 55, 8, 15),
(54, '2021-06-05', '16:00:00.0000', '1.00', 64, 12, 16),
(55, '2020-09-15', '09:59:00.0000', '1.00', 56, 3, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `type` varchar(25) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `types`
--

INSERT INTO `types` (`id`, `type`) VALUES
(47, 'canard'),
(1, 'chat'),
(34, 'chauve-souris'),
(2, 'chien'),
(40, 'écoureuil'),
(48, 'Furet'),
(45, 'girafe'),
(38, 'gorila'),
(3, 'lapin'),
(35, 'lézard'),
(42, 'lyon'),
(46, 'ours'),
(4, 'poisson'),
(49, 'Porc'),
(31, 'rénard'),
(36, 'singe'),
(33, 'snake'),
(6, 'souris'),
(44, 'tiger');

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `utilisateur` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mot_de_passe` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `courriel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `utilisateur`, `mot_de_passe`, `courriel`) VALUES
(13, 'Carine', '$2y$10$5W9lPOzxJXoxwOeZGl14Q.9xAifG5AvkvPatU7OQMBd6IdCcugOUW', 'carine.croteau@gmail.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `veterinaires`
--

CREATE TABLE `veterinaires` (
  `id` int(11) NOT NULL,
  `nom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `veterinaires`
--

INSERT INTO `veterinaires` (`id`, `nom`, `prenom`) VALUES
(1, 'Price', 'Jonathan'),
(2, 'Gagnon', 'Francis'),
(3, 'Tremblay', 'Jean'),
(6, 'Gere', 'Richard'),
(9, 'Sorkin', 'Rick'),
(10, 'Gabriel', 'Peter'),
(12, 'Murray', 'Brian'),
(15, ' Tracy', 'Dick'),
(16, 'O\'Neal', 'Patrick'),
(18, 'Harbec ', 'Mélissa ');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `animaux`
--
ALTER TABLE `animaux`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proprietairePrioritaire_animal` (`id_proprietairePriorite`),
  ADD KEY `type_animal` (`id_type`);

--
-- Índices para tabela `proprietaires`
--
ALTER TABLE `proprietaires`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `rendezvous`
--
ALTER TABLE `rendezvous`
  ADD PRIMARY KEY (`id`),
  ADD KEY `animal_rendezvous` (`id_animal`),
  ADD KEY `veterinaire_rendezvous` (`id_veterinaire`),
  ADD KEY `proprietaires_rendezvous` (`id_proprietaire`);

--
-- Índices para tabela `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `type` (`type`);

--
-- Índices para tabela `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `veterinaires`
--
ALTER TABLE `veterinaires`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `animaux`
--
ALTER TABLE `animaux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de tabela `proprietaires`
--
ALTER TABLE `proprietaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `rendezvous`
--
ALTER TABLE `rendezvous`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de tabela `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de tabela `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `veterinaires`
--
ALTER TABLE `veterinaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `animaux`
--
ALTER TABLE `animaux`
  ADD CONSTRAINT `proprietairePrioritaire_animal` FOREIGN KEY (`id_proprietairePriorite`) REFERENCES `proprietaires` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `type_animal` FOREIGN KEY (`id_type`) REFERENCES `types` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `rendezvous`
--
ALTER TABLE `rendezvous`
  ADD CONSTRAINT `animal_rendezvous` FOREIGN KEY (`id_animal`) REFERENCES `animaux` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `proprietaires_rendezvous` FOREIGN KEY (`id_proprietaire`) REFERENCES `proprietaires` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `veterinaire_rendezvous` FOREIGN KEY (`id_veterinaire`) REFERENCES `veterinaires` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
