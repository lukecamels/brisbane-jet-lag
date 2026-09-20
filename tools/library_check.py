import re, sys, time, urllib.parse, urllib.request
BASE="https://library-brisbane.ent.sirsidynix.net.au/client/en_AU/eLibCat/search/results?"
def count(q, code=None, name=None):
    params=[("qu",q)]
    if code: params.append(("qf","LIBRARY\tLibrary\t1:%s\t%s"%(code,name)))
    url=BASE+urllib.parse.urlencode(params)
    req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    h=urllib.request.urlopen(req,timeout=60).read().decode("utf-8","ignore")
    m=re.search(r"([\d,]+) Results? Found",h)
    if m: return int(m.group(1).replace(",",""))
    if "detail_biblio" in h or "detailItemTable" in h: return 1
    return 0
if __name__=="__main__":
    for code,name in [("NFM","New Farm Library"),("TWG","Toowong Library"),("TOO","Toowong Library"),("TWN","Toowong Library"),("BSQ","Brisbane Square Library")]:
        print(code,name,count("",code,name)); time.sleep(1)
