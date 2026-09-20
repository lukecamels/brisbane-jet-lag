import time
from library_check import count
Q=["Agatha Christie","Stephen King","Lee Child","Liane Moriarty","Roald Dahl","Rowling Harry Potter","Tim Winton","Trent Dalton",
   "Boy Swallows Universe","Pride and Prejudice Austen","The Book Thief Zusak","Cloudstreet Winton","Nineteen Eighty-Four Orwell","The Hobbit Tolkien","Johnno Malouf","To Kill a Mockingbird",
   "Moby Dick Melville","Ulysses Joyce","Meditations Marcus Aurelius","Zen and the Art of Motorcycle Maintenance","The Wind in the Willows","Catch-22 Heller","Dracula Stoker","Frankenstein Shelley"]
print("%-44s %8s %8s"%("query","NewFarm","Toowong"))
for q in Q:
    a=count(q,"NFM","New Farm Library"); time.sleep(0.6); b=count(q,"TWG","Toowong Library"); time.sleep(0.6)
    print("%-44s %8d %8d"%(q,a,b))
