import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Awards from './components/Awards';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Awards year="2022"/>} />
        <Route path="/2021" element={<Awards year="2021"/>} />
        <Route path="/2020" element={<Awards year="2020"/>} />
        <Route path="/2019" element={<Awards year="2019"/>} />
        <Route path="/2018" element={<Awards year="2018"/>} />
        <Route path="/2017" element={<Awards year="2017"/>} />
        <Route path="/2016" element={<Awards year="2016"/>} />
        <Route path="/2015" element={<Awards year="2015"/>} />
        <Route path="/2014" element={<Awards year="2014"/>} />
        <Route path="/2013" element={<Awards year="2013"/>} />
        <Route path="/2012" element={<Awards year="2012"/>} />
        <Route path="/2011" element={<Awards year="2011"/>} />
        <Route path="/2010" element={<Awards year="2010"/>} />
        <Route path="/2009" element={<Awards year="2009"/>} />
        <Route path="/2008" element={<Awards year="2008"/>} />
        <Route path="/2007" element={<Awards year="2007"/>} />
        <Route path="/2006" element={<Awards year="2006"/>} />
        <Route path="/2005" element={<Awards year="2005"/>} />
        <Route path="/2004" element={<Awards year="2004"/>} />
        <Route path="/2003" element={<Awards year="2003"/>} />
        <Route path="/2002" element={<Awards year="2002"/>} />
        <Route path="/2001" element={<Awards year="2001"/>} />
        <Route path="/2000" element={<Awards year="2000"/>} />
        <Route path="/1999" element={<Awards year="1999"/>} />
        <Route path="/1998" element={<Awards year="1998"/>} />
        <Route path="/1997" element={<Awards year="1997"/>} />
        <Route path="/1996" element={<Awards year="1996"/>} />
        <Route path="/1995" element={<Awards year="1995"/>} />
        <Route path="/1994" element={<Awards year="1994"/>} />
        <Route path="/1993" element={<Awards year="1993"/>} />
        <Route path="/1992" element={<Awards year="1992"/>} />
        <Route path="/1991" element={<Awards year="1991"/>} />
        <Route path="/1990" element={<Awards year="1990"/>} />
        <Route path="/1989" element={<Awards year="1989"/>} />
        <Route path="/1988" element={<Awards year="1989"/>} />
        <Route path="/1987" element={<Awards year="1987"/>} />
        <Route path="/1986" element={<Awards year="1986"/>} />
        <Route path="/1985" element={<Awards year="1985"/>} />
        <Route path="/1984" element={<Awards year="1984"/>} />
        <Route path="/1983" element={<Awards year="1983"/>} />
        <Route path="/1982" element={<Awards year="1982"/>} />
        <Route path="/1981" element={<Awards year="1981"/>} />
        <Route path="/1980" element={<Awards year="1980"/>} />
        <Route path="/1979" element={<Awards year="1979"/>} />
        <Route path="/1978" element={<Awards year="1978"/>} />
        <Route path="/1977" element={<Awards year="1977"/>} />
        <Route path="/1976" element={<Awards year="1976"/>} />
        <Route path="/1975" element={<Awards year="1975"/>} />
        <Route path="/1974" element={<Awards year="1974"/>} />
        <Route path="/1973" element={<Awards year="1973"/>} />
        <Route path="/1972" element={<Awards year="1972"/>} />
        <Route path="/1971" element={<Awards year="1971"/>} />
        <Route path="/1970" element={<Awards year="1970"/>} />
        <Route path="/1969" element={<Awards year="1969"/>} />
        <Route path="/1968" element={<Awards year="1968"/>} />
        <Route path="/1967" element={<Awards year="1967"/>} />
        <Route path="/1966" element={<Awards year="1966"/>} />
        <Route path="/1965" element={<Awards year="1965"/>} />
        <Route path="/1964" element={<Awards year="1964"/>} />
        <Route path="/1963" element={<Awards year="1963"/>} />
        <Route path="/1962" element={<Awards year="1962"/>} />
        <Route path="/1961" element={<Awards year="1961"/>} />
        <Route path="/1960" element={<Awards year="1960"/>} />
        <Route path="/1959" element={<Awards year="1959"/>} />
        <Route path="/1958" element={<Awards year="1958"/>} />
        <Route path="/1957" element={<Awards year="1957"/>} />
        <Route path="/1956" element={<Awards year="1956"/>} />
        <Route path="/1955" element={<Awards year="1955"/>} />
        <Route path="/1954" element={<Awards year="1954"/>} />
        <Route path="/1953" element={<Awards year="1953"/>} />
        <Route path="/1952" element={<Awards year="1952"/>} />
        <Route path="/1951" element={<Awards year="1951"/>} />
        <Route path="/1950" element={<Awards year="1950"/>} />
        <Route path="/1949" element={<Awards year="1949"/>} />
        <Route path="/1948" element={<Awards year="1948"/>} />
        <Route path="/1947" element={<Awards year="1947"/>} />
        <Route path="/1946" element={<Awards year="1946"/>} />
        <Route path="/1945" element={<Awards year="1945"/>} />
        <Route path="/1944" element={<Awards year="1944" />} />
        <Route path="/1943" element={<Awards year="1943"/>} />
        <Route path="/1942" element={<Awards year="1942"/>} />
        <Route path="/1941" element={<Awards year="1941"/>} />
        <Route path="/1940" element={<Awards year="1940"/>} />
        <Route path="/1939" element={<Awards year="1939"/>} />
        <Route path="/1938" element={<Awards year="1938"/>} />
        <Route path="/1937" element={<Awards year="1937"/>} />
        <Route path="/1936" element={<Awards year="1936"/>} />
        <Route path="/1935" element={<Awards year="1935"/>} />
        <Route path="/1934" element={<Awards year="1934"/>} />
        <Route path="/1933" element={<Awards year="1933"/>} />
        <Route path="/1932" element={<Awards year="1932"/>} />
        <Route path="/1931" element={<Awards year="1931"/>} />
        <Route path="/1930" element={<Awards year="1930"/>} />
        <Route path="/1929" element={<Awards year="1929"/>} />
        <Route path="/1928" element={<Awards year="1928"/>} />
        <Route path="/1927" element={<Awards year="1927"/>} />
        <Route path="/1926" element={<Awards year="1926"/>} />
        <Route path="/1925" element={<Awards year="1925"/>} />
        <Route path="/1924" element={<Awards year="1924"/>} />
        <Route path="/1923" element={<Awards year="1923"/>} />
        <Route path="/1922" element={<Awards year="1922"/>} />
        <Route path="/1921" element={<Awards year="1921"/>} />
        <Route path="/1920" element={<Awards year="1920"/>} />
        <Route path="/1919" element={<Awards year="1919"/>} />
        <Route path="/1918" element={<Awards year="1918"/>} />
        <Route path="/1917" element={<Awards year="1917"/>} />
        <Route path="/1916" element={<Awards year="1916"/>} />
        <Route path="/1915" element={<Awards year="1915"/>} />
        <Route path="/1914" element={<Awards year="1914"/>} />
        <Route path="/1913" element={<Awards year="1913"/>} />
        <Route path="/1912" element={<Awards year="1912"/>} />
        <Route path="/1911" element={<Awards year="1911"/>} />
        <Route path="/1910" element={<Awards year="1910"/>} />
        <Route path="/1909" element={<Awards year="1909"/>} />
        <Route path="/1908" element={<Awards year="1908"/>} />
        <Route path="/1907" element={<Awards year="1907"/>} />
        <Route path="/1906" element={<Awards year="1906"/>} />
        <Route path="/1905" element={<Awards year="1905"/>} />
        <Route path="/1904" element={<Awards year="1904"/>} />
        <Route path="/1903" element={<Awards year="1903"/>} />
        <Route path="/1902" element={<Awards year="1902"/>} />
        <Route path="/1901" element={<Awards year="1901"/>} />
        <Route path="/1900" element={<Awards year="1900"/>} />
      </Routes>
    </BrowserRouter>
    </>

  );
}



export default App;
