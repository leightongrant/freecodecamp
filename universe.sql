--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: constellation; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.constellation (
    constellation_id integer NOT NULL,
    name character varying(30) NOT NULL,
    meaning text,
    quadrant text
);


ALTER TABLE public.constellation OWNER TO freecodecamp;

--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.constellation_constellation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.constellation_constellation_id_seq OWNER TO freecodecamp;

--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.constellation_constellation_id_seq OWNED BY public.constellation.constellation_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    description text,
    type character varying(20),
    size_in_lightyears integer
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(30) NOT NULL,
    description text,
    type character varying(20),
    is_spherical boolean,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(30) NOT NULL,
    description text,
    type character varying(20),
    number_of_moons integer,
    distance_from_sun_in_km integer,
    age_in_billions_of_years numeric(3,1),
    has_life boolean,
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(30) NOT NULL,
    description text,
    type character varying(20),
    age_in_billions_of_years numeric(3,1),
    galaxy_id integer,
    constellation_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: start_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.start_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.start_star_id_seq OWNER TO freecodecamp;

--
-- Name: start_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.start_star_id_seq OWNED BY public.star.star_id;


--
-- Name: constellation constellation_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation ALTER COLUMN constellation_id SET DEFAULT nextval('public.constellation_constellation_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.start_star_id_seq'::regclass);


--
-- Data for Name: constellation; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.constellation VALUES (1, 'Orion', 'Hunter', 'Northern');
INSERT INTO public.constellation VALUES (2, 'Ursa Major', 'Great Bear', 'Northern');
INSERT INTO public.constellation VALUES (3, 'Andromeda', 'Chained Maiden', 'Northern');
INSERT INTO public.constellation VALUES (4, 'Crux', 'Southern Cross', 'Southern');
INSERT INTO public.constellation VALUES (5, 'Centaurus', 'Centaur', 'Southern');


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 'Our home galaxy with spiral structure', 'Spiral', 100000);
INSERT INTO public.galaxy VALUES (2, 'Andromeda Galaxy', 'Nearest major galaxy to the Milky Way', 'Spiral', 220000);
INSERT INTO public.galaxy VALUES (3, 'Triangulum Galaxy', 'Third largest galaxy in local group', 'Spiral', 60000);
INSERT INTO public.galaxy VALUES (4, 'Sombrero Galaxy', 'Galaxy with prominent dark dust lane', 'Spiral', 50000);
INSERT INTO public.galaxy VALUES (5, 'Large Magellanic Cloud', 'Satellite galaxy of Milky Way', 'Irregular', 14000);
INSERT INTO public.galaxy VALUES (6, 'Whirlpool Galaxy', 'Grand spiral galaxy with prominent arms', 'Spiral', 76000);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'The Moon', 'Earth natural satellite', 'Terrestrial', true, 1);
INSERT INTO public.moon VALUES (2, 'Phobos', 'Larger moon of Mars', 'Asteroid', false, 2);
INSERT INTO public.moon VALUES (3, 'Deimos', 'Smaller moon of Mars', 'Asteroid', false, 2);
INSERT INTO public.moon VALUES (4, 'Io', 'Most volcanically active body', 'Terrestrial', true, 4);
INSERT INTO public.moon VALUES (5, 'Europa', 'Icy moon with subsurface ocean', 'Icy', true, 4);
INSERT INTO public.moon VALUES (6, 'Ganymede', 'Largest moon in solar system', 'Terrestrial', true, 4);
INSERT INTO public.moon VALUES (7, 'Callisto', 'Heavily cratered Galilean moon', 'Terrestrial', true, 4);
INSERT INTO public.moon VALUES (8, 'Titan', 'Moon with thick atmosphere', 'Terrestrial', true, 5);
INSERT INTO public.moon VALUES (9, 'Enceladus', 'Icy moon with geysers', 'Icy', true, 5);
INSERT INTO public.moon VALUES (10, 'Mimas', 'Moon with huge impact crater', 'Terrestrial', true, 5);
INSERT INTO public.moon VALUES (11, 'Iapetus', 'Moon with distinctive ridge', 'Terrestrial', true, 5);
INSERT INTO public.moon VALUES (12, 'Triton', 'Retrograde moon of Neptune', 'Terrestrial', true, 7);
INSERT INTO public.moon VALUES (13, 'Proteus', 'Large irregular moon', 'Asteroid', false, 7);
INSERT INTO public.moon VALUES (14, 'Titania', 'Largest moon of Uranus', 'Terrestrial', true, 8);
INSERT INTO public.moon VALUES (15, 'Oberon', 'Second largest moon of Uranus', 'Terrestrial', true, 8);
INSERT INTO public.moon VALUES (16, 'Umbriel', 'Dark moon of Uranus', 'Terrestrial', true, 8);
INSERT INTO public.moon VALUES (17, 'Ariel', 'Brightest moon of Uranus', 'Terrestrial', true, 8);
INSERT INTO public.moon VALUES (18, 'Kepler Moon A', 'Moon of Kepler-452b', 'Terrestrial', true, 10);
INSERT INTO public.moon VALUES (19, 'TRAPPIST Moon 1', 'Moon of TRAPPIST-1e', 'Icy', false, 11);
INSERT INTO public.moon VALUES (20, 'Hot Jupiter Moon', 'Small moon of HD 209458b', 'Asteroid', false, 12);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Earth', 'Blue planet with life', 'Terrestrial', 1, 150, 4.5, true, 10);
INSERT INTO public.planet VALUES (2, 'Mars', 'Red planet with ancient water', 'Terrestrial', 2, 228, 4.5, false, 10);
INSERT INTO public.planet VALUES (3, 'Venus', 'Hot planet with thick atmosphere', 'Terrestrial', 0, 108, 4.5, false, 10);
INSERT INTO public.planet VALUES (4, 'Jupiter', 'Gas giant with great red spot', 'Gas Giant', 79, 778, 4.5, false, 10);
INSERT INTO public.planet VALUES (5, 'Saturn', 'Gas giant with famous rings', 'Gas Giant', 83, 1430, 4.5, false, 10);
INSERT INTO public.planet VALUES (6, 'Mercury', 'Smallest terrestrial planet', 'Terrestrial', 0, 58, 4.5, false, 10);
INSERT INTO public.planet VALUES (7, 'Neptune', 'Windy ice giant', 'Ice Giant', 14, 4500, 4.5, false, 10);
INSERT INTO public.planet VALUES (8, 'Uranus', 'Ice giant with extreme tilt', 'Ice Giant', 27, 2870, 4.5, false, 10);
INSERT INTO public.planet VALUES (9, 'Exoplanet Prime', 'Potentially habitable exoplanet', 'Terrestrial', 2, 15, 2.3, false, 3);
INSERT INTO public.planet VALUES (10, 'Kepler-452b', 'Earth-sized exoplanet', 'Terrestrial', 1, 130, 6.0, false, 1);
INSERT INTO public.planet VALUES (11, 'TRAPPIST-1e', 'Earth-like exoplanet', 'Terrestrial', 0, 6, 7.6, false, 2);
INSERT INTO public.planet VALUES (12, 'HD 209458b', 'Hot Jupiter exoplanet', 'Gas Giant', 0, 4, 4.2, false, 6);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Betelgeuse', 'Red supergiant star', 'Red Giant', 8.8, 1, 1);
INSERT INTO public.star VALUES (2, 'Rigel', 'Blue supergiant star', 'Blue Giant', 8.0, 1, 1);
INSERT INTO public.star VALUES (3, 'Sirius', 'Brightest star in night sky', 'Main Sequence', 0.3, 1, 2);
INSERT INTO public.star VALUES (4, 'Polaris', 'North Star, navigation aid', 'Yellow Supergiant', 46.0, 1, 2);
INSERT INTO public.star VALUES (5, 'Proxima Centauri', 'Nearest star to our Sun', 'Red Dwarf', 4.5, 1, 5);
INSERT INTO public.star VALUES (6, 'Andromeda Star A', 'Bright star in Andromeda', 'Blue Giant', 6.5, 2, 3);
INSERT INTO public.star VALUES (7, 'Triangulum Star B', 'Giant star in Triangulum', 'Red Giant', 7.2, 3, 3);
INSERT INTO public.star VALUES (8, 'Sombrero Star C', 'Massive star in Sombrero', 'Blue Supergiant', 5.1, 4, 1);
INSERT INTO public.star VALUES (9, 'Magellanic Star D', 'Star in LMC', 'Main Sequence', 3.0, 5, 4);
INSERT INTO public.star VALUES (10, 'Sun', 'Primary star of our system', 'Yellow Dwarf', 4.6, 1, 5);


--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.constellation_constellation_id_seq', 5, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: start_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.start_star_id_seq', 10, true);


--
-- Name: constellation constellation_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation
    ADD CONSTRAINT constellation_name_key UNIQUE (name);


--
-- Name: constellation constellation_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation
    ADD CONSTRAINT constellation_pkey PRIMARY KEY (constellation_id);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star start_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT start_name_key UNIQUE (name);


--
-- Name: star start_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT start_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_constellation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_constellation_id_fkey FOREIGN KEY (constellation_id) REFERENCES public.constellation(constellation_id);


--
-- Name: star start_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT start_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

