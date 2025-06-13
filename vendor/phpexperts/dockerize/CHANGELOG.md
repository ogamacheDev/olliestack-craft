## v13.0.2
* **[2025-05-01 19:09:42 CDT]** Version 13.0.2: Fixed the .gitattributes.

## v13.0.1
* **[2025-04-21 00:04:11 CDT]** [php-ci] Fixed a bug.

## v13.0.0
* **[2025-04-17 06:21:56 CDT]** Downverted the composer version constraints system to PHP 7.0.0 compatibility, with polyfills.
* **[2025-04-17 05:56:47 CDT]** [m] Version bumped the PHP versions.
* **[2025-04-17 05:08:34 CDT]** Completely reimplemented the PHP version parser.
* **[2025-03-26 11:15:21 CDT]** [m] Renamed test/ to tests/.
* **[2025-03-26 10:45:57 CDT]** Removed unnecessary distributables from composer install.
* **[2025-03-26 10:35:51 CDT]** Moved the web root to public/.
* **[2025-03-26 09:51:14 CDT]** Added ext-uuid to the extension builder system.
* **[2025-03-26 09:40:29 CDT]** Completely reimplemented the PHP extension builder to use only 1 image for all PHP versions.
* **[2025-03-26 08:21:47 CDT]** [bin/php] Optimized further when running natively and inside docker.
* **[2025-03-25 13:21:46 CDT]** Added the PHP Extension Builder system.
* **[2025-03-25 13:10:50 CDT]** [linux] Added the en_US.UTF-8 locale so more apps will work.
* **[2025-03-25 13:08:48 CDT]** Added steps to download ext-uuid source code.
* **[2025-03-25 13:04:45 CDT]** Ignore all .build-assets/ directories.
* **[2025-03-24 13:34:41 CDT]** [fixed] Ensured proper command execution in the entrypoint.
* **[2025-03-24 13:33:11 CDT]** [bin/php] Sets the working directory of the CLI to the current project directory.
* **[2025-03-24 13:32:15 CDT]** [bin/php] Default to host network if no project network exists
* **[2025-03-24 13:31:12 CDT]** [bin/php] Propagate the exit code from native php execution.

## v12.2.1
* **[2025-03-24 13:20:03 CDT]** [bin/php] Complete fixed native PHP dispatching.

## v12.2.0
* **[2025-03-23 00:33:11 CDT]** Fixed a bug where the native PHP binary couldn't find files.

## v12.1.2
* **[2024-12-21 13:32:23 CDT]** Improved PHP 8.4 support.
* **[2025-03-17 16:31:30 CDT]** Built PHP 8.1.32, 8.2.28, 8.3.19, 8.4.5. HEAD -> v12.x

## v12.1.1
* **[2025-03-13 17:25:06 CDT]** [php-ci] Refactored a lot.

## v12.1.0
* **[2025-03-12 18:32:13 CDT]** Upgraded PHP 8.3.17 and 8.4.4.
* **[2025-03-12 17:50:58 CDT]** Renabled build support for PHP 5.6-7.3.
* **[2025-03-12 17:45:01 CDT]** [php-ci] Added support for PHPUnit v12.
* **[2025-03-12 17:37:04 CDT]** [php-ci] Added PHPUnit support for PHP 7.0 and 7.1.

## v12.0.2
* **[2025-01-07 08:11:57 CST]** Fixed a bug where native PHP detection via .env didn't work.
* **[2024-12-13 02:18:41 CST]** Added another YouTube demo.

## v12.0.1
* **[2024-12-13 01:51:43 CST]** Added PHP 8.4 support to php-ci.sh HEAD -> v12.x, origin/v12.x

## v12.0.0
* **[2024-12-12 16:19:40 CST]** Added support for PHP 8.4.
* **[2024-12-12 23:55:18 CST]** Majorly overhauled the dockerize installer.

## v11.1.0
* **[2024-09-26 07:37:40 CDT]** Add composer to the PHP 8.4 image. HEAD -> v11.0
* **[2024-09-26 07:36:44 CDT]** Fixed the PHP 8.4 entrypoint to use the standard entrypoint.
* **[2024-09-13 03:48:00 CDT]** Added support for PHP 8.4 beta5.
* **[2024-09-12 05:30:37 CDT]** [m] Updated the README.
* **[2024-09-12 01:58:49 CDT]** [m] Use the new ENV format in the Dockerfiles.
* **[2024-09-12 01:44:09 CDT]** Fixes for PHP 8.4 beta4 builds.
* **[2024-09-09 12:55:33 CDT]** [m] Prioritized the installation instructions in the README.md.

## v11.0.0
* **[2024-09-07 17:20:00 CDT]** [m] Added license and copyright clauses to files.
* **[2024-09-07 17:20:24 CDT]** Added initial steps for creating a distroless PHP image. origin/v11.0
* **[2024-09-07 18:55:07 CDT]** [major] Upgraded to Ubuntu 24.04 Noble Numbat.
* **[2024-09-07 18:55:45 CDT]** Fixed a major reversion in web-debug by readding php-fpm.
* **[2024-09-07 19:00:42 CDT]** Use a docker volume to store apt metadata.
* **[2024-08-05 03:46:54 CDT]** Added support for PHP 8.4 Alpha 4.
* **[2024-08-05 04:33:33 CDT]** Added a bash installation script to the composer package.


## v10.0.3
* **[2024-06-29 10:13:12 CDT]** [php-ci] Dynamically fetch and compute the supported PHP versions from the composer.json.
* **[2024-06-29 10:20:39 CDT]** [php-ci] Use phpunit's default config if there aren't version-specific xmls.
* **[2024-06-29 10:20:48 CDT]** [php-ci] Added support for PHPUnit v11.
* **[2024-06-29 10:31:50 CDT]** Create a Packagist alias to phpexperts/dockerise for SEO.

## v10.0.2
* **[2024-06-26 00:57:05 CDT]** Added my php-ci.sh script.

## v10.0.0: Self-hosted 100% 0-Dependency Bash installer
* **[2024-05-24 07:40:15 CDT]** Added a comprehensive zero-dependency Bash-via-curl installer.
* **[2024-05-24 07:31:26 CDT]** Added a mechanism for finding the first open HTTP port for nginx. master
* **[2024-05-24 07:30:16 CDT]** Redis removed v7.3 from docker; switched to v7.2.

## v9.2.1
* **[2024-05-23 08:17:00 CDT]** Upgraded to MariaDB 10.11, Redis 7.3, and Postgres 16. 2.0, ]

## v9.2.0
* **[2024-05-21 21:31:26 CDT]** Configured it so that composer will run the install script. 

## v9.1.2
* **[2024-05-21 06:27:48 CDT]** Fixes docker logs being truncated. origin/v9.

## v9.1.1
* **[2024-01-16 03:15:49 CST]** [major] Fixed a critical bug that prevented the dockerized php CLI from running in projects with a defined network.
* **[2024-01-14 14:22:31 CST]** Fixed the Docker installer.
* **[2024-01-14 14:13:58 CST]** Renamed the installer.
* **[2024-01-14 14:12:02 CST]** Switched the installer from wget to curl.

## v9.1.0: New zero-dependency Bash Installer
* **[2024-01-14 07:06:07 CST]** Added a zero-PHP-dependency Bash installer.
* **[2024-01-14 07:04:47 CST]** Added support for Linux ACLs in the base Linux image.
* **[2024-01-14 07:03:35 CST]** Fixed docker building bugs in base-oracle.

## v9.0.1
* **[2024-01-14 06:40:56 CST]** [major] Fixed a critical bug that prevented the dockerized php CLI from running in new projects.

## v9.0.0: Version 9.0.0: New full PHP image, Oracle ext-oci8, and a new build system.
* **[2024-01-13 23:04:49 CST]** Added the Oracle ext-oci8 binaries, built against Ubuntu 22.04.
* **[2024-01-13 22:51:39 CST]** Added a  docker build that contains the Oracle DB's ext-oci8 extension.
* **[2024-01-13 22:50:16 CST]** Added wget to the base PHP image.
* **[2024-01-12 17:30:47 CST]** Refactored IonCube builds so that the extension is only downloaded once.
* **[2024-01-12 14:49:27 CST]** Added a `full` docker build that contains every bundled PHP extension, and then some.

## v8.2.0
* **[2024-01-12 05:58:13 CST]** Removed Ubuntu's apt files to save space in the base image.
* **[2024-01-07 09:30:00 CST]** Fixed the building of the ioncube images.
* **[2024-01-07 03:28:00 CST]** [major] Fixed the broken web images.
* **[2023-12-05 10:10:39 CST]** Added PHP v8.3 support.
* **[2023-12-05 10:09:40 CST]** Added a PHP version test script.

## v8.1.0
* **[2023-07-23 03:21:22 CDT]** Now Dockerize PHP will run in the container, if it's running, or create a temp one if it's not.
* **[2023-05-19 05:35:27 CDT]** Updated to PHP v8.0.28, v8.1.19, and v8.2.6.
* **[2023-05-19 05:30:36 CDT]** Changed the default image from PHP v7.4 to v8.0.
* **[2023-02-03 07:19:37 CST]** Majorly refactored so that it executes a persistent container for native launch speeds.

## v8.0.1
* **[2023-01-20 21:58:20 CST]** Fixed the problem that prevented the web images from being successfully built.

## v8.0.0
* **[2022-08-11 00:37:03 CDT]** Boosted the default version of PHP to 8.1.
* **[2022-08-11 00:37:33 CDT]** Added PHP v8.2 support. master
* **[2023-01-17 06:59:14 CST]** Cleaned up the build script so that it tags instead of building duplicate images.
* **[2023-01-17 07:00:57 CST]** Improved the Linux base image build.
* **[2023-01-17 08:46:09 CST]** Explicitly set the default PHP version to 8.1.
* **[2023-01-17 07:41:52 CST]** Now, PHP will be launched from a continuously-running container for much faster runtimes at the expense of about 130 MB per container.
* **[2023-01-17 08:57:42 CST]** Added support for PHP 8.2.

## v7.2.1
* **[2022-06-18 00:05:57 CDT]** Show all of the output of docker build, not just the last 6 lines.
* **[2022-06-18 00:10:05 CDT]** Upgraded to Ubuntu 22.04 Jammy Jellyfish.

## v7.2.0
* **[2021-12-27 12:05:54 CST]** Use the official PHP 8.1 builds now.
* **[2021-12-27 12:06:15 CST]** Include ext-imap and ext-ssh2.
* **[2021-12-27 17:18:50 CST]** (#10) Added support for the Ioncube Decoder.
* **[2021-12-27 17:22:18 CST]** Force the rebuilding of the Linux base image, for an up-to-date OS.
* **[2021-12-27 17:26:25 CST]** Added basic automated tests.

## v7.1.2
* **[2021-12-24 23:27:47 CST]** Added support for composer v2.2.0+.

## v7.1.1
* **[2021-12-24 16:09:16 CST]** Added xdebug support for PHP 8.1.
* **[2021-12-24 16:09:02 CST]** Upgraded to PHP v7.4.27, 8.0.14, and 8.1.1.
* **[2021-12-24 15:36:38 CST]** Fixed the ability of selecting the PHP version via the .env file.

## v7.1.0
* **[2021-12-10 08:32:27 CST]** Added install support for PHP 5.6, 8.0, and 8.1.
* **[2021-11-18 04:13:15 CST]** Added the ability to configure the Docker platform via the .env.
* **[2021-11-18 04:10:49 CST]** Upgraded the config files for Xdebug v3.0.

## v7.0.0
* **[2021-11-02 15:47:49 CST]** PHP 8.1 RC5.
* **[2021-11-01 08:08:36 CST]** Dramatically reduced total build time from 33 minutes to 11 minutes.
* **[2021-11-01 06:24:52 CST]** Embedded composer into the php container.
* **[2021-11-01 06:00:30 CST]** Run the native PHP when inside docker.
* **[2021-07-29 07:13:12 CDT]** Set the PHP memory_limit to unlimited by default.
* **[2021-07-29 07:07:35 CDT]** Fixed the building of xdebug.
* **[2021-06-21 07:10:58 CDT]** Added git and ssh for private packages supoprt.

## v6.6.0
* [2021-09-22 08:40:22 CDT] - Added the abiltiy to run commands in containers from the CLI.

## v6.5.0
* [2021-06-03 08:22:27 CDT] - Installed the SOAP extension.
* [2021-06-03 08:37:10 CDT] - Major improvements to the php cli.

## v6.4.1
* [2021-02-05] Upgraded to PHP v8.0.1, v7.4.14, and v7.3.26
* [2021-02-05] Added a Docker Hub release script.

## v6.4.0
* [2020-12-03] Upgraded to PHP v8.0.0

## v6.2.1

* [2020-10-30] Upgraded to PHP v8.0 RC3.

## v6.2.0

* [2020-10-04] Upgraded to PHP v8.0 RC1.
* [2020-10-04] Fixed the extension_dir location so PHP extensions work.
* [2020-10-04] Installed the Zend Opcache extension.
* [2020-10-04] Installed the PHPRedis extension.
* [2020-10-04] Stripped out the debug symbols for massive space savings.
* [2020-09-19] Upgraded to PHP v8.0 Beta 4.

## v6.1.0: 

 * [2020-09-10] Added the ability to dynamically pick what PHP version is run via $PHP_VERSION.
 * [2020-09-10] Run the system's native PHP via $PHP_VERSION="native".

## v6.0.0: 2020-09-10

 * [2020-09-09] Upgraded to Ubuntu Focal Fossa v20.04-LTS.
 * [2020-09-09] Added support for PHP v5.6.
 * [2020-09-10] Added support for manually compiling PHP 8 pre-releases.

## v5.0.2: 2020-07-17
 * [2020-07-17] Fixed the .env.stub for Laravel DB engines.
 
## v5.0.1: 2020-05-02
 * [2020-05-02] - Fixed a bug that prevented accessing Postgres DBs via psql.

## v5.0: 2020-04-17
 * Fully automated dockerization via composer.
 * Added the ability to install specific PHP versions + DB creds.
 * Programmatically set the docker network.

## v4.0: 2020-04-12 (Easter 2020)
 * Completely re-engineered the entire project!
 * Refactored the entire build system.
 * Now installs ext-sodium on PHP < 7.2.
 * Now builds every major version of PHP 7 at once.
 * Now upgrades the Ubuntu image to get latest security fixes.
 * Added ext-imagick and ext-sodium.
 * Added unzip and net-tools.

## v3.0: 2020-02-26
 * Majorly refactored the build process to build all of the latest PHP versions 
   at the same time.
 * Added the ability to dynamically pick what PHP version is run via $PHP_VERSION.
 * Added a utility to delete the web images.
 * Fixed the 'Can't locate Term/ReadLine.pm' error.

## v1.4.0: 2020-01-16
 * Upgraded to PHP 7.4.
 * Moved to the standard docker-compose.yml format.
 * PHP v7.4.1
 * Nginx

## v1.3.0: 2019-06-09
 * Upgraded to Ubuntu Bionic (18.04).
 * Upgraded to PHP 7.3.

## v1.2.0: 2018-03-07
* **[2018-02-04]** Upgraded the stack:
  * PHP v7.2.3
  * Nginx v1.10.3 [unchanged]
  * Redis v3.2.11
  * PostgreSQL v9.6.7
  * MariaDB 10.3.4 [unchanged]

* **[2018-02-21]** Added support for multiple nginx vhosts.
* **[2018-02-21]** Added support for SSL certificates and unlimited custom 
                   nginx configuration.
* **[2018-02-21]** Added the bcmath PHP extension.
* **[2018-02-21]** [internal] Created a Makefile for the creation of release files.
* **[2018-02-21]** [internal] Consolidated the common docker files.

## v1.1.0: 2018-02-05

* **[2018-02-05]** The CLI now runs as the current user, NOT as root.
* **[2018-02-05]** The CLI now uses the same Docker net as the main project,
                   so it can communicate with other daemons (redis, psql, etc.).
* **[2018-02-05]** Added a lot of documentation to the project.

## v1.0.0: 2018-02-04

* **[2018-02-04]** Upgraded the stack:
  * PHP v7.2.2
  * Nginx v1.10.3
  * Redis v3.2.6
  * PostgreSQL v9.6.6
  * MariaDB 10.3.4
