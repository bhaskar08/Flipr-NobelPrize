import React from 'react'
import { a } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">NobelWinners</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Year
                </a>
                <ul className="dropdown-menu">
                    <div className='d-flex' style={{width:'720px', flexDirection:'column'}}>
                    <div className='d-flex'><a className="dropdown-item" href="/">Year-2022</a>
                    <a className="dropdown-item" href="/2021">Year-2021</a>
                    <a className="dropdown-item" href="/2020">Year-2020</a>
                    <a className="dropdown-item" href="/2018">Year-2018</a>
                    <a className="dropdown-item" href="/2017">Year-2017</a>
                    <a className="dropdown-item" href="/2016">Year-2016</a>
                    <a className="dropdown-item" href="/2015">Year-2015</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/2014">Year-2014</a>
                    <a className="dropdown-item" href="/2013">Year-2013</a>
                    <a className="dropdown-item" href="/2012">Year-2012</a>
                    <a className="dropdown-item" href="/2011">Year-2011</a>
                    <a className="dropdown-item" href="/2010">Year-2010</a>
                    <a className="dropdown-item" href="/2009">Year-2009</a>
                    <a className="dropdown-item" href="/2008">Year-2008</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/2007">Year-2007</a>
                    <a className="dropdown-item" href="/2006">Year-2006</a>
                    <a className="dropdown-item" href="/2005">Year-2005</a>
                    <a className="dropdown-item" href="/2004">Year-2004</a>
                    <a className="dropdown-item" href="/2003">Year-2003</a>
                    <a className="dropdown-item" href="/2002">Year-2002</a>
                    <a className="dropdown-item" href="/2001">Year-2001</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/2000">Year-2000</a>
                    <a className="dropdown-item" href="/1999">Year-1999</a>
                    <a className="dropdown-item" href="/1998">Year-1998</a>
                    <a className="dropdown-item" href="/1997">Year-1997</a>
                    <a className="dropdown-item" href="/1996">Year-1996</a>
                    <a className="dropdown-item" href="/1995">Year-1995</a>
                    <a className="dropdown-item" href="/1994">Year-1994</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1993">Year-1993</a>
                    <a className="dropdown-item" href="/1992">Year-1992</a>
                    <a className="dropdown-item" href="/1991">Year-1991</a>
                    <a className="dropdown-item" href="/1990">Year-1990</a>
                    <a className="dropdown-item" href="/1989">Year-1989</a>
                    <a className="dropdown-item" href="/1988">Year-1988</a>
                    <a className="dropdown-item" href="/1987">Year-1987</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1986">Year-1986</a>
                    <a className="dropdown-item" href="/1985">Year-1985</a>
                    <a className="dropdown-item" href="/1984">Year-1984</a>
                    <a className="dropdown-item" href="/1983">Year-1983</a>
                    <a className="dropdown-item" href="/1982">Year-1982</a>
                    <a className="dropdown-item" href="/1981">Year-1981</a>
                    <a className="dropdown-item" href="/1980">Year-1980</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1979">Year-1979</a>
                    <a className="dropdown-item" href="/1978">Year-1978</a>
                    <a className="dropdown-item" href="/1977">Year-1977</a>
                    <a className="dropdown-item" href="/1976">Year-1976</a>
                    <a className="dropdown-item" href="/1975">Year-1975</a>
                    <a className="dropdown-item" href="/1974">Year-1974</a>
                    <a className="dropdown-item" href="/1973">Year-1973</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1972">Year-1972</a>
                    <a className="dropdown-item" href="/1971">Year-1971</a>
                    <a className="dropdown-item" href="/1970">Year-1970</a>
                    <a className="dropdown-item" href="/1969">Year-1969</a>
                    <a className="dropdown-item" href="/1968">Year-1968</a>
                    <a className="dropdown-item" href="/1967">Year-1967</a>
                    <a className="dropdown-item" href="/1966">Year-1966</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1966">Year-1966</a>
                    <a className="dropdown-item" href="/1965">Year-1965</a>
                    <a className="dropdown-item" href="/1964">Year-1964</a>
                    <a className="dropdown-item" href="/1963">Year-1963</a>
                    <a className="dropdown-item" href="/1962">Year-1962</a>
                    <a className="dropdown-item" href="/1961">Year-1961</a>
                    <a className="dropdown-item" href="/1960">Year-1960</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1959">Year-1959</a>
                    <a className="dropdown-item" href="/1958">Year-1958</a>
                    <a className="dropdown-item" href="/1957">Year-1957</a>
                    <a className="dropdown-item" href="/1956">Year-1956</a>
                    <a className="dropdown-item" href="/1955">Year-1955</a>
                    <a className="dropdown-item" href="/1954">Year-1954</a>
                    <a className="dropdown-item" href="/1953">Year-1953</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1952">Year-1952</a>
                    <a className="dropdown-item" href="/1951">Year-1951</a>
                    <a className="dropdown-item" href="/1950">Year-1950</a>
                    <a className="dropdown-item" href="/1949">Year-1949</a>
                    <a className="dropdown-item" href="/1948">Year-1948</a>
                    <a className="dropdown-item" href="/1947">Year-1947</a>
                    <a className="dropdown-item" href="/1946">Year-1946</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1945">Year-1945</a>
                    <a className="dropdown-item" href="/1944">Year-1944</a>
                    <a className="dropdown-item" href="/1943">Year-1943</a>
                    <a className="dropdown-item" href="/1942">Year-1942</a>
                    <a className="dropdown-item" href="/1941">Year-1941</a>
                    <a className="dropdown-item" href="/1940">Year-1940</a>
                    <a className="dropdown-item" href="/1939">Year-1939</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1938">Year-1938</a>
                    <a className="dropdown-item" href="/1937">Year-1937</a>
                    <a className="dropdown-item" href="/1936">Year-1936</a>
                    <a className="dropdown-item" href="/1935">Year-1935</a>
                    <a className="dropdown-item" href="/1934">Year-1934</a>
                    <a className="dropdown-item" href="/1933">Year-1933</a>
                    <a className="dropdown-item" href="/1932">Year-1932</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1931">Year-1931</a>
                    <a className="dropdown-item" href="/1930">Year-1930</a>
                    <a className="dropdown-item" href="/1929">Year-1929</a>
                    <a className="dropdown-item" href="/1928">Year-1928</a>
                    <a className="dropdown-item" href="/1927">Year-1927</a>
                    <a className="dropdown-item" href="/1926">Year-1926</a>
                    <a className="dropdown-item" href="/1925">Year-1925</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1924">Year-1924</a>
                    <a className="dropdown-item" href="/1923">Year-1923</a>
                    <a className="dropdown-item" href="/1922">Year-1922</a>
                    <a className="dropdown-item" href="/1921">Year-1921</a>
                    <a className="dropdown-item" href="/1920">Year-1920</a>
                    <a className="dropdown-item" href="/1919">Year-1919</a>
                    <a className="dropdown-item" href="/1918">Year-1918</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1917">Year-1917</a>
                    <a className="dropdown-item" href="/1916">Year-1916</a>
                    <a className="dropdown-item" href="/1915">Year-1915</a>
                    <a className="dropdown-item" href="/1914">Year-1914</a>
                    <a className="dropdown-item" href="/1913">Year-1913</a>
                    <a className="dropdown-item" href="/1912">Year-1912</a>
                    <a className="dropdown-item" href="/1911">Year-1911</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1910">Year-1910</a>
                    <a className="dropdown-item" href="/1909">Year-1909</a>
                    <a className="dropdown-item" href="/1908">Year-1908</a>
                    <a className="dropdown-item" href="/1907">Year-1907</a>
                    <a className="dropdown-item" href="/1906">Year-1906</a>
                    <a className="dropdown-item" href="/1905">Year-1905</a>
                    <a className="dropdown-item" href="/1904">Year-1904</a></div>
                    <div className='d-flex'><a className="dropdown-item" href="/1903">Year-1903</a>
                    <a className="dropdown-item" href="/1902">Year-1902</a>
                    <a className="dropdown-item" href="/1901">Year-1901</a>
                    <a className="dropdown-item" href="/1900">Year-1900</a>
                  </div>
                  </div>
                </ul>
                </li>
            
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
