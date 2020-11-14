-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 04-Set-2020 às 01:39
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
-- Banco de dados: `projet_final`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `boutiques`
--

CREATE TABLE `boutiques` (
  `id` int(11) NOT NULL,
  `adresse` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `ville` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `code_postal` varchar(7) COLLATE utf8mb4_general_ci NOT NULL,
  `province` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `pays` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `telephone` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `boutiques`
--

INSERT INTO `boutiques` (`id`, `adresse`, `ville`, `code_postal`, `province`, `pays`, `telephone`) VALUES
(1, '6817 43 Av Montreal', 'Montreal', 'J7Y 1H9', 'Québec', 'Canada', '(306)753-6414'),
(2, '17 Bishop Street', 'Toronto', 'M4B 1B4', 'Ontario', 'Canada', '(514)494-9238'),
(3, '91 Southampton St.', 'Kitchener', 'G5V 4H0', 'Ontario', 'Canada', '(807)465-3623'),
(4, '85 Marsh Dr.', 'Niagara Falls', 'K8B 0E2', 'Ontario', 'Canada', '(506)624-3997'),
(5, '35 Griffin Drive', 'Laval', 'B2T 8C6', 'Québec', 'Canada', '(778)927-1923'),
(6, '8 53rd Street', 'Québec', 'L9Z 0B3', 'Québec', 'Canada', '(902)493-2380'),
(7, '652 Pendergast Road', 'Mississauga', 'L3V 3E8', 'Ontario', 'Canada', '(289)817-7336'),
(8, '12 SE. Inverness Ave.', 'Gatineau', 'G6L 2L4', 'Québec', 'Canada', '(613)557-4928'),
(9, 'Sugar Street', 'Brossard', 'V8K 5V2', 'Québec', 'Canada', '(506)635-2413'),
(10, '534 High Drive', 'Trois-Rivières', 'C1B 5M2', 'Québec', 'Canada', '(416)889-3626');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categorie` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `categories`
--

INSERT INTO `categories` (`id`, `categorie`) VALUES
(1, 'Général'),
(2, 'Consignes'),
(3, 'Lorem ipsum');

-- --------------------------------------------------------

--
-- Estrutura da tabela `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `nom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `telephone` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `courriel` varchar(80) COLLATE utf8mb4_general_ci NOT NULL,
  `adresse` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `ville` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `code_postal` varchar(7) COLLATE utf8mb4_general_ci NOT NULL,
  `province` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `pays` varchar(25) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `clients`
--

INSERT INTO `clients` (`id`, `nom`, `prenom`, `telephone`, `courriel`, `adresse`, `ville`, `code_postal`, `province`, `pays`) VALUES
(1, 'Bergeron', 'Lance', '(250)314-9883', 'tfran.vezar@repargy.ga', '4605 Cottage Lane', 'Gatineau', 'E4G 3V9', 'Québec', 'Canada'),
(2, 'Rouleau', 'Cerise', '(416)327-1732', '2omar.abbassi.37@lipweiness.ml', '540 Blanshard', 'Brossard', 'S4H 1P6', 'Québec', 'Canada'),
(3, 'Martin', 'Raina', '(905)325-2147', '3omar.elmajik.718@bardharti.ga', '1875 Queen Elizabeth Boulevard', 'Niagara Falls', 'J1A 0J4', 'Ontario', 'Canada'),
(4, 'Caouette', 'Jeoffroi', '(306)248-1432', 'mhsaiiden@delimiterrefugees.com', '1547 Brew Creek Rd', 'Toronto', 'T1W 2H9', 'Ontario', 'Canada'),
(5, 'Chalut', 'Donatien', '(705)364-2946', 'omouradzaki@teicrimta.gq', '1310 Nelson Street', 'Mississauga', 'T9A 3Y8', 'Ontario', 'Canada'),
(6, 'Vadeboncoeur', 'Avice', '(204)301-7819', '9sourouralyak@pauvoiplek.cf', '472 St. John Street', 'Québec', 'P9N 0A6', 'Québec', 'Canada'),
(7, 'Raymond', 'Marmion', '(780)668-9745', 'tkhalid.varane.56@riotlogwong.tk', '585 Robson St', 'Kitchener', 'E2A 1L5', 'Ontario', 'Canada'),
(8, 'Paiement', 'Adrien', '(647)812-3939', 'uusbrowney@ourmudce.ga', '1117 Halsey Avenue', 'Ottawa', 'E9C 1B0', 'Ontario', 'Canada'),
(9, 'Sanschagrin', 'Etoile', '(403)469-8868', 'kocta_lusiusb@marresa.ml', '2319 9th Avenue', 'Trois-Rivières', 'L1E 3B1', 'Québec', 'Canada'),
(10, 'Quirion', 'Cécile', '(416)937-8640', 'i3marawadl@quoteko.gq', '3012 Bank St', 'Québec', 'N1A 2X4', 'Québec', 'Canada');

-- --------------------------------------------------------

--
-- Estrutura da tabela `factures`
--

CREATE TABLE `factures` (
  `id` int(11) NOT NULL,
  `boutique_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `forfait_id` int(11) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `rabais` decimal(10,2) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `factures`
--

INSERT INTO `factures` (`id`, `boutique_id`, `client_id`, `forfait_id`, `prix`, `rabais`, `date`) VALUES
(1, 1, 1, 1, '75.00', '0.00', '2014-04-23'),
(2, 2, 2, 2, '64.00', '10.00', '2015-03-23'),
(3, 3, 3, 3, '65.00', '19.00', '2020-05-05'),
(4, 4, 4, 4, '55.00', '0.00', '2020-05-07'),
(5, 5, 5, 6, '50.00', '12.00', '2018-11-07'),
(6, 6, 6, 18, '85.00', '20.00', '2017-08-22'),
(7, 7, 7, 9, '45.00', '0.00', '2016-09-21'),
(8, 8, 8, 12, '35.00', '0.00', '2015-03-31'),
(9, 9, 9, 11, '70.00', '5.00', '2014-02-17'),
(10, 10, 10, 20, '95.00', '20.00', '2019-07-28');

-- --------------------------------------------------------

--
-- Estrutura da tabela `forfaits`
--

CREATE TABLE `forfaits` (
  `id` int(11) NOT NULL,
  `type` varchar(60) COLLATE utf8mb4_general_ci NOT NULL,
  `fournisseur_id` int(11) NOT NULL,
  `telephone_mobile_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `forfaits`
--

INSERT INTO `forfaits` (`id`, `type`, `fournisseur_id`, `telephone_mobile_id`) VALUES
(1, 'Zen 2 12 Go', 1, 1),
(2, 'Zen 2 10 Go', 1, 5),
(3, 'Connectez tout 6', 2, 2),
(4, 'Promo 49', 2, 6),
(5, '10 GB Max Speed', 3, 3),
(6, '20 GB Max Speed', 3, 6),
(7, 'Peace of Mind', 4, 4),
(8, 'Peace of Mind Connect Ultra', 4, 10),
(9, 'Moyenne Balance', 5, 7),
(10, 'Grande Balance', 5, 8),
(11, 'Unlimited Canada-Wide', 6, 1),
(12, 'Unlimited Québec-Wide', 6, 9),
(13, '5 GB', 7, 2),
(14, '10 GB', 7, 8),
(15, '4.5 GB', 8, 4),
(16, '8 GB', 8, 3),
(17, '10 GB', 9, 5),
(18, '7 GB ', 9, 9),
(19, '4 GB of Data', 10, 6),
(20, '8 GB of Data', 10, 7);

-- --------------------------------------------------------

--
-- Estrutura da tabela `fournisseurs`
--

CREATE TABLE `fournisseurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `fournisseurs`
--

INSERT INTO `fournisseurs` (`id`, `nom`) VALUES
(1, 'Vidéotron'),
(2, 'Bell'),
(3, 'Rodgers'),
(4, 'Telus'),
(5, 'Koodo'),
(6, 'Lucky Mobile'),
(7, 'Fido'),
(8, 'Public Mobile'),
(9, 'Virgin Mobile'),
(10, 'Chatr');

-- --------------------------------------------------------

--
-- Estrutura da tabela `nouvelles`
--

CREATE TABLE `nouvelles` (
  `id` int(11) NOT NULL,
  `titre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description_courte` varchar(125) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description_longue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date_nouvelle` date NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `fk_categorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `nouvelles`
--

INSERT INTO `nouvelles` (`id`, `titre`, `description_courte`, `description_longue`, `date_nouvelle`, `actif`, `fk_categorie`) VALUES
(1, 'Bon projet!', 'Voici maintenant le temps de participer à la réalisation du projet final!', 'Vous avez en main l\'ensemble des habiletés vous permettant de mener à bien le développement d\'une infrastructure Web. \r\n\r\nCe projet vous permettra de consolider vos acquis. \r\n\r\nBon projet!', '2020-08-27', 1, 1),
(2, 'Nouvelle inactive', 'Cette nouvelle est inactive et elle ne devrait pas s\'afficher sur le site!', 'Attention, assurez-vous de bien lire les consignes :)', '2020-08-28', 0, 1),
(3, 'Consignes du projet', 'L\'énoncé est publié sur Google Classroom ainsi que sur ce site dans la page \"Énoncé\" disponible dans le menu principal. ', 'L\'énoncé est publié sur Google Classroom ainsi que sur ce site dans la page \"Énoncé\" disponible dans le menu principal. \r\n\r\nAssurez-vous de bien en prendre connaissance. Lorsque vous croyez avoir terminé le projet, relisez chacune des consignes, et assurez-vous de la validité de votre remise. Prenez aussi un moment pour valider les critères d\'évaluation. \r\n\r\nLe projet doit être remis avant le dimanche 20 septembre à 23h59. ', '2020-08-25', 1, 2),
(4, 'Publication des critères d\'évaluation', 'Les critères d\'évaluation sont disponibles à la fin de l\'énoncé.. ', 'Les critères d\'évaluation sont disponibles à la fin de l\'énoncé, sur Google Classroom ainsi que dans la page \"Énoncé\" disponible dans le menu principal. \r\n\r\nAssurez-vous de bien les comprendre et de vous assurer que le projet remis répond à ces critères. ', '2020-08-24', 1, 2),
(5, 'Lorem ipsum', 'Cette nouvelle ne devrait pas s\'afficher dans la page principale car elle n\'est pas assez récente. ', 'Cette nouvelle ne devrait pas s\'afficher dans la page principale car elle n\'est pas assez récente. \r\n\r\nElle devrait cependant s\'afficher lorsque l\'utilisateur clique sur \"Toutes les nouvelles\" ou \"Lorem ipsum\" dans le sous-menu des nouvelles. ', '2020-08-01', 1, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `telephones_mobiles`
--

CREATE TABLE `telephones_mobiles` (
  `id` int(11) NOT NULL,
  `marque` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `modele` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `IMEI` bigint(15) NOT NULL,
  `couleur` varchar(25) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `telephones_mobiles`
--

INSERT INTO `telephones_mobiles` (`id`, `marque`, `modele`, `IMEI`, `couleur`) VALUES
(1, 'Apple', 'iPhone 11 Pro', 191716247082754, 'Noir'),
(2, 'Apple', 'iPhone SE', 644121599426517, 'Blanc'),
(3, 'Apple', 'iPhone XR', 369845998774846, 'Rouge'),
(4, 'Samsung', 'Galaxy A71', 649184886587100, 'Gris'),
(5, 'Samsung', 'Galaxy S20 Ultra 5G', 334218457780178, 'Blanc'),
(6, 'Google', 'Pixel 4 XL', 658352720092899, 'Noir'),
(7, 'Motorola', 'One Hyper', 629894950896082, 'Bleu Profond'),
(8, 'LG', 'G8X ThinQ', 672583272571522, 'Noir Aurore'),
(9, 'Huawei', 'P30 Pro', 751433361701973, 'Cristal Etincellant'),
(10, 'Samsung', 'Galaxy Note10+', 233040868807840, 'Aura Brillance');

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `utilisateur` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mot_de_passe` varchar(60) COLLATE utf8mb4_general_ci NOT NULL,
  `courriel` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `utilisateur`, `mot_de_passe`, `courriel`) VALUES
(3, 'admin', '$2a$07$sE1CtK5bKjvVaI57dAX1euqA5iCquzvIXJ6a4mnR.nxReL74o7c1y', 'ericmartins81@gmail.com ');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `boutiques`
--
ALTER TABLE `boutiques`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `factures`
--
ALTER TABLE `factures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_facture` (`client_id`),
  ADD KEY `boutique_facture` (`boutique_id`),
  ADD KEY `forfait_facture` (`forfait_id`);

--
-- Índices para tabela `forfaits`
--
ALTER TABLE `forfaits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fournisseur_forfait` (`fournisseur_id`),
  ADD KEY `telephone_mobile_forfait` (`telephone_mobile_id`);

--
-- Índices para tabela `fournisseurs`
--
ALTER TABLE `fournisseurs`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `nouvelles`
--
ALTER TABLE `nouvelles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nouvelles_categorie` (`fk_categorie`);

--
-- Índices para tabela `telephones_mobiles`
--
ALTER TABLE `telephones_mobiles`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `boutiques`
--
ALTER TABLE `boutiques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `factures`
--
ALTER TABLE `factures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `forfaits`
--
ALTER TABLE `forfaits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `fournisseurs`
--
ALTER TABLE `fournisseurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `nouvelles`
--
ALTER TABLE `nouvelles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `telephones_mobiles`
--
ALTER TABLE `telephones_mobiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `factures`
--
ALTER TABLE `factures`
  ADD CONSTRAINT `boutique_facture` FOREIGN KEY (`boutique_id`) REFERENCES `boutiques` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `client_facture` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `forfait_facture` FOREIGN KEY (`forfait_id`) REFERENCES `forfaits` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `forfaits`
--
ALTER TABLE `forfaits`
  ADD CONSTRAINT `fournisseur_forfait` FOREIGN KEY (`fournisseur_id`) REFERENCES `fournisseurs` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `telephone_mobile_forfait` FOREIGN KEY (`telephone_mobile_id`) REFERENCES `telephones_mobiles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `nouvelles`
--
ALTER TABLE `nouvelles`
  ADD CONSTRAINT `nouvelles_categorie` FOREIGN KEY (`fk_categorie`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
