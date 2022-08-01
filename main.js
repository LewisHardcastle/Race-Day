let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let = runnersAge = 18;

if (runnersAge > 18 && early === true)
{
    raceNumber = raceNumber + 1000;
}
if (runnersAge > 18 && early === true)
{
    console.log(`Race at 9:30am ${raceNumber}`);
}
else if (runnersAge > 18 && early === false)
{
    console.log(`Race at 11:00am ${raceNumber}`);
}
else
{
    console.log(`Youth Race at 12:30pm ${raceNumber}`);
}
